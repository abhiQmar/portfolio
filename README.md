# AK Wealth — Multi-Profile & Family Portfolio Tracker

An India-focused personal and family wealth management web application engineered for **free hosting on GitHub Pages**, with **multi-profile support**, **first-screen profile selection**, **multi-year annual comparative matrices**, and a **zero-secret Google Sheets OAuth architecture**.

---

## 🌟 Key Features

### 1. Multi-Profile System & First-Screen Selection
- **Workspace Profiles**:
  - **`Abhishek`**: Tailored for tech equity, employer stock ($UBER RSUs), overseas demat accounts (Interactive Brokers, Vested), domestic Indian demat, and family assets.
  - **`Naresh (Family & HUF)`**: Comprehensive family wealth ledger segregated cleanly across **`Naresh`**, **`Rekha`**, and **`HUF`** (Hindu Undivided Family) accounts.
- **First Screen Modal**: Prompts the user on first launch to select their active profile, with instant profile switching available anytime via the header pill (`⇄`).

### 2. Dual-Mode Portfolio Views
- **Tab 1: Minimalist 1-Year Portfolio**:
  - Select any fiscal year (2026, 2025, 2024) via a clean dropdown.
  - Filter by entity/family member or view combined portfolio.
  - Hero KPI cards (Net Worth, Liquid Cash & FDs, Equities & MFs, Global & $UBER, Real Estate & Alts).
  - Visual donut charts for asset class allocation and entity distribution.
- **Tab 2: Multi-Year Comparative Matrix**:
  - Full financial ledger with side-by-side columns for each fiscal year (**2024**, **2025**, **2026**).
  - Annual net worth progression bar chart.
  - One-click editing for holdings across all years simultaneously.

### 3. Bank Balances & Fixed Deposits Ledger
- **Indian National Banks Enum**: Built-in dropdown containing all 12 major public sector banks (SBI, PNB, Bank of Baroda, Canara, Union, BOI, etc.) and leading scheduled private banks (HDFC, ICICI, Axis, IDFC FIRST, Kotak, etc.).
- **Quick-Select Chips**: Instant 1-click selection chips for the most common banks.
- **Dual Tracking**: Independently records **Savings Account Balance** and **Fixed Deposit (FD)** amounts in ₹ Lakhs, automatically syncing into master net worth.

### 4. US Equities & Demat with Live FX Conversion
- Native tracking for US brokerage accounts (IBKR, Vested) in **USD (\$)** and employer stock (**\$UBER**).
- Real-time USD to INR live exchange rate fetching via public exchange API with customizable manual override.
- Switch between **Crores (Cr)**, **Lakhs (L)**, and **Full ₹** displays.

---

## 🔒 Zero-Secret Security Architecture

```
                  ┌────────────────────────────────────────────────────────┐
                  │                 GitHub Pages (Public)                  │
                  │             https://abhiqmar.github.io/portfolio       │
                  └──────────────┬─────────────────────────┬───────────────┘
                                 │                         │
                     1. OAuth Login (PKCE)       3. Authenticated API Call
                     (Only Client ID in Repo)     (Bearer Token in RAM)
                                 │                         │
                                 ▼                         ▼
                    ┌─────────────────────────┐   ┌────────────────────────┐
                    │      Google OAuth       │   │   Google Sheets API    │
                    │   accounts.google.com   │   │   v4 Private Sheet     │
                    └─────────────────────────┘   └────────────────────────┘
```

- **NO Private Keys or Service Account JSONs**: The public GitHub repository contains **zero private keys, API secrets, or passwords**.
- **Client-Side Google Identity Services (GIS)**: When you click **"Sign in with Google"**, an OAuth 2.0 popup authenticates your identity directly with Google.
- **Strict Permission Lockdown**: Even if your GitHub repository is public, your private Google Sheet is protected by Google's ACL. Unauthorized visitors receive a `403 Forbidden` from Google.

---

## 📊 Pre-Configured Google Sheet

- **Spreadsheet ID**: `1RMO7qp-_m8GWbemlUNqdEDNijm33Q1Gs`
- **Sheet GID**: `1201843379`
- **Multi-Profile Excel Template**: `portfolio_template.xlsx`
  - Run `python3 generate_template.py` to regenerate the multi-tab, multi-profile spreadsheet.

### Sheet Structure
| Tab | Columns |
|---|---|
| **Portfolio** | Profile, Entity / Member, Date, Asset Class, Investment, 2024 Value, 2025 Value, 2026 Value, Notes |
| **Banks** | Profile, Bank, Account Holder, Savings A/C (₹ Lakhs), Fixed Deposit (₹ Lakhs), Total Balance (₹ Lakhs) |
| **Brokers** | Profile, Platform / Account, Entity / Holder, Category, Currency, Native Balance, Notes |

---

## 🚀 Local Development & Preview

Start a local HTTP server:
```bash
cd /Users/madhvikumari/Documents/AK/portfolio
python3 -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🌐 Deploying to GitHub Pages

1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/abhiqmar/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings → Pages**.
   - Under **Build and deployment → Source**, select **GitHub Actions**.
   - The included workflow `.github/workflows/deploy.yml` will automatically build and publish your site at `https://abhiqmar.github.io/portfolio`.

3. In **Google Cloud Console**:
   - Add `https://abhiqmar.github.io` to **Authorized JavaScript origins** in your OAuth 2.0 Web Client.
   - Click **⚙️ Settings** in the app header and paste your Client ID once.
