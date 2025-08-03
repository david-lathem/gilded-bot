## 🪙 OxaBot – Crypto Payments & Payout Automation via OxaPay

> ⚡ Generate invoices, accept crypto payments, send payouts, and get real-time webhook updates — all from your Discord server with a modern UI and OxaPay integration.

### ✨ Features

- 🧾 **Invoice Generator**
  Create crypto invoices with customizable amount, currency, lifetime, and more.

- 💸 **Receive Crypto Payments**
  Accept payments in BTC, ETH, USDT, and many other supported coins via OxaPay.

- 📤 **Instant Payouts**
  Send withdrawals or automate payouts directly to user wallets via OxaPay's payout API.

- 🔔 **Real-time Notifications**
  Secure webhook handler alerts you on payment and payout status.

- 📊 **Invoice & Payout Tracking**
  Fetch current invoice or payout status anytime using track ID.

- 🧱 **Sleek Embedded UI**
  Clean, minimal embeds designed to show payment info clearly and professionally in Discord.

![invoice noti image](https://github.com/bilal-the-dev/Crypto-OxaPay-Discord-bot-Payout-and-Invoice-/blob/main/invoiceGen.png)
![invoice paid image](https://github.com/bilal-the-dev/Crypto-OxaPay-Discord-bot-Payout-and-Invoice-/blob/main/invoicePay.png)

### 🛠️ Tech Stack

- **Discord.js** – Command and interaction handling
- **TypeScript** – Type safety across APIs and bot logic
- **OxaPay API** – Payment + payout processing
- **Express.js** – Secure webhook receiver
- **MongoDB (optional)** – Can be added for logging or tracking

### 🚀 Setup Instructions

```bash
git clone https://github.com/bilal-the-dev/Crypto-OxaPay-Discord-bot-Payout-and-Invoice oxaBot
cd oxaBot
npm install
cp .env.example .env # Fill with your API keys
npm run start
```

### 🧪 Example Commands

```bash
/gen_oxa_invoice amount:15 currency:USDT auto_withdrawal:true
/oxa_invoice_status track_id:123456789
/oxa_payout address:... amount:... currency:...
/oxa_balance
```

### ⚙️ Environment Variables (`.env`)

| Key                       | Description                   |
| ------------------------- | ----------------------------- |
| `DISCORD_TOKEN`           | Your Discord bot token        |
| `OXAPAY_GENERAL_API_KEY`  | API key for balance           |
| `OXAPAY_PAYOUT_API_KEY`   | API key for payouts           |
| `OXAPAY_MERCHANT_API_KEY` | API key for invoice           |
| `NODE_ENV`                | `development` or `production` |

### 🔒 Webhook Endpoint

Set your OxaPay webhook URL to:

```
https://your-domain.com/api/oxa-webhook
```

HMAC-secured with `OXAPAY_MERCHANT_API_KEY`. Rejects tampered requests.

### 📜 License

MIT License © 2025 Bilal
