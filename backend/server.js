const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
app.set('trust proxy', 1);

const db = new Database(path.join(__dirname, 'fastbite.db'));
db.pragma('journal_mode = WAL');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('admin','cashier'))
);
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  bill_no TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  items_json TEXT NOT NULL,
  subtotal REAL NOT NULL,
  tax REAL NOT NULL,
  total REAL NOT NULL,
  payment_method TEXT NOT NULL,
  timestamp TEXT NOT NULL,
  created_by INTEGER NOT NULL
);
`);

if (db.prepare('SELECT COUNT(*) AS n FROM users').get().n === 0) {
  const add = db.prepare('INSERT INTO users (username,name,password_hash,role) VALUES (?,?,?,?)');
  add.run('admin','Rohit Admin',bcrypt.hashSync('admin123',10),'admin');
  add.run('cashier','FastBite Cashier',bcrypt.hashSync('cashier123',10),'cashier');
}

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'fastbite-change-this-secret',
  resave:false,
  saveUninitialized:false,
  cookie:{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV === 'production',maxAge:8*60*60*1000}
}));

function loginRequired(req,res,next){
  if(!req.session.user) return res.status(401).json({message:'Please login first.'});
  next();
}
function adminRequired(req,res,next){
  if(!req.session.user) return res.status(401).json({message:'Please login first.'});
  if(req.session.user.role !== 'admin') return res.status(403).json({message:'Admin access required.'});
  next();
}

app.post('/api/login',(req,res)=>{
  const {username,password} = req.body || {};
  const user = db.prepare('SELECT * FROM users WHERE username=?').get(String(username||'').trim());
  if(!user || !bcrypt.compareSync(String(password||''),user.password_hash))
    return res.status(401).json({message:'Invalid username or password.'});
  req.session.user={id:user.id,username:user.username,name:user.name,role:user.role};
  res.json({user:req.session.user});
});

app.get('/api/me',(req,res)=>{
  if(!req.session.user) return res.status(401).json({message:'Not logged in.'});
  res.json({user:req.session.user});
});

app.post('/api/logout',(req,res)=>{
  req.session.destroy(()=>res.json({message:'Logged out'}));
});

// Backend order endpoint. The original UI/local history is intentionally preserved.
function makeServerBillNo() {
  const now = new Date();
  const dateStr = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`;
  const row = db.prepare(`SELECT bill_no FROM orders WHERE bill_no LIKE ? ORDER BY id DESC LIMIT 1`).get(`ORD-${dateStr}-%`);
  let seq = 1;
  if (row && row.bill_no) {
    const match = String(row.bill_no).match(/-(\d{4})$/);
    if (match) seq = Number(match[1]) + 1;
  }
  return `ORD-${dateStr}-${String(seq).padStart(4,'0')}`;
}

app.post('/api/orders',loginRequired,(req,res)=>{
  const o=req.body||{};
  if(!o.customerName || !o.mobile || !Array.isArray(o.items) || o.items.length === 0)
    return res.status(400).json({message:'Incomplete order.'});
  try{
    const serverBillNo = makeServerBillNo();
    const timestamp = o.timestamp || new Date().toLocaleString();
    db.prepare(`INSERT INTO orders
      (bill_no,customer_name,mobile,items_json,subtotal,tax,total,payment_method,timestamp,created_by)
      VALUES (?,?,?,?,?,?,?,?,?,?)`).run(
        serverBillNo,o.customerName,o.mobile,JSON.stringify(o.items),
        Number(o.subtotal),Number(o.tax),Number(o.total),o.paymentMethod,
        timestamp,req.session.user.id
    );
    res.status(201).json({
      message:'Order saved',
      order:{...o,billNo:serverBillNo,timestamp}
    });
  }catch(e){
    res.status(500).json({message:'Could not save order.'});
  }
});

app.get('/api/orders',adminRequired,(req,res)=>{
  const q=String(req.query.search||'').trim();
  const rows=q
    ? db.prepare(`SELECT * FROM orders WHERE bill_no LIKE ? OR customer_name LIKE ? OR mobile LIKE ? ORDER BY id DESC`).all(`%${q}%`,`%${q}%`,`%${q}%`)
    : db.prepare(`SELECT * FROM orders ORDER BY id DESC`).all();
  res.json({orders:rows.map(r=>({
    billNo:r.bill_no,customerName:r.customer_name,mobile:r.mobile,
    items:JSON.parse(r.items_json),subtotal:r.subtotal,tax:r.tax,total:r.total,
    paymentMethod:r.payment_method,timestamp:r.timestamp
  }))});
});

app.get('/health',(req,res)=>res.json({ok:true,service:'FastBite POS'}));

// Serve the original POS.
app.use(express.static(path.join(__dirname,'..')));

app.listen(PORT,'0.0.0.0',()=>console.log(`FastBite POS running on port ${PORT}`));
