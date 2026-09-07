# FastBite POS — Final Mobile + Shared History Fix

This version keeps the existing FastBite POS UI, 3D login, menu, cart, payment, receipt and authentication flow, while fixing:

- Mobile cart access through a responsive cart drawer using the existing cart/payment controls.
- Mobile payment + total + Complete Payment visibility in the bottom billing strip.
- Admin Order History loaded from the backend so the same history is available across devices after login.
- Expandable Order History cards showing customer name, mobile, payment method, date/time, ordered items, quantities, subtotal, GST and total.
- Server-generated sequential bill numbers to avoid duplicate bill numbers across different devices.
- Existing localStorage history remains only as a temporary fallback if the live API is unavailable.

## Run locally

```bash
cd backend
npm install
npm start
```

Then open `http://localhost:3000`.

## Render

Use the same backend start command already used by the deployed service:

```bash
cd backend && npm start
```
