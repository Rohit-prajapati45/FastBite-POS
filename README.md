# FastBite POS

FastBite POS keeps the existing POS UI and adds only:

1. Order History order details: click an Order ID to expand its items, quantities and totals.
2. A separate protected Admin Management page at `/admin.html` for menu changes and order history.

Admin menu changes are stored in the backend database and loaded by the POS automatically.

## Run locally

```bash
cd backend
npm install
npm start
```

Open: `http://localhost:3000`

Admin Management: `http://localhost:3000/admin.html`

Default accounts:
- Admin: `admin` / `admin123`
- Cashier: `cashier` / `cashier123`
