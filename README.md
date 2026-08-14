# FastBite POS — restored UI + backend login

This version deliberately preserves the original POS UI and JavaScript:
menu items, category bar, search, cart, payment, printing, receipt modal and Order History.

Added separately:
- main login screen
- Admin/Cashier roles
- backend session authentication
- bcrypt password hashes
- SQLite database
- backend order API

Run:
cd backend
npm install
npm start

Then open http://localhost:3000

Admin: admin / admin123
Cashier: cashier / cashier123

Do not double-click index.html; use the localhost URL.
