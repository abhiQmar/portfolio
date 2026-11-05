# AK Wealth — Financial Dashboard Design Principles

This document formalizes the design language and visual architecture for the **AK Wealth** portfolio dashboard, inspired by institutional wealth management software and accounting ledger design standards.

---

## 🎯 Core Design Philosophy: High Data Density with Minimal Visual Noise

In financial tracking and portfolio management, visual clarity is paramount. Every visual element must serve a functional purpose. Flashy badges, heavy gradients, and saturated rainbow colors create cognitive fatigue and distract from what matters: **asset valuation, capital allocation, and performance returns**.

---

## 📐 Key Design Principles

### 1. Color Restraint & Semantic Purpose
- **Color is functional, not decorative**: Color should be reserved almost exclusively for financial signals:
  - **Positive Returns / Gains**: Emerald Green (`#10b981` / `#34d399`).
  - **Negative Returns / Losses**: Rose Red (`#f43f5e` / `#fb7185`).
  - **Valuations / Balances**: High-contrast neutral white (`#f8fafc`).
  - **Neutral / Zero Change**: Muted slate (`#64748b`).
- **Eliminate Rainbow Badges**: Asset categories and account holders should not be rendered as bright colored pills. Instead, use clean, muted typography (`#94a3b8` / `#64748b`) with subtle borders or discreet text labels.

### 2. High-Precision Tabular Hierarchy
- **Strict Column Alignment**:
  - **Left-aligned**: Asset names, ticker symbols, bank names, categories, and account holders.
  - **Center-aligned**: Entity tags and currencies.
  - **Right-aligned**: Quantities, native balances, valuation figures, percentages, and YoY growth rates.
- **Tabular Figures (`tabular-nums`)**:
  - All numbers must use `font-variant-numeric: tabular-nums`. This ensures digits have equal width so decimal points and currency units align perfectly in vertical columns.
- **Indian Number Grouping**:
  - Consistent comma separation according to Indian numbering standards (e.g., `₹94,76,865.50` rather than western millions/billions where appropriate).
  - Clear unit switches: Crores (`Cr`), Lakhs (`L`), and Full (`₹`).

### 3. Clear Typographic Hierarchy
- **Primary Level (Highest Contrast)**: Asset names and current valuations (`font-weight: 600–700; color: #f8fafc; font-size: 0.92rem–1.05rem`).
- **Secondary Level (Medium Contrast)**: Categories, entities, and percentage shares (`font-weight: 500; color: #94a3b8; font-size: 0.82rem–0.85rem`).
- **Tertiary Level (Muted Context)**: Account notes, folios, dates, and subtitle metadata (`color: #64748b; font-size: 0.75rem`).

### 4. Grouping & Summary Footers
- **Category Subtotals**: Group related holdings (e.g., Equities, Mutual Funds, Real Estate, Liquid / Cash) with subtle category group headers.
- **Net Worth Summary Row**:
  - Distinct footer styling with top and bottom borders.
  - Bold uppercase label: `NET WORTH` or `TOTAL VALUATION`.
  - Prominently displayed aggregate sum and 100.0% allocation share.

### 5. Minimalist Header & Navigation
- The top header should be clean and uncluttered.
- Brand name should be concise (`AK Wealth`), without excessive marketing tags or long descriptive subtitles.
- Controls (Profile switcher pill, USD/INR FX ticker, Unit toggle, and Sign-in button) should be compact and secondary to the primary financial ledger.

### 6. Zero-Trust Privacy First
- Never display real financial figures or bank amounts on public viewports without user authentication.
- Provide a clean, elegant lock screen that keeps private ledgers hidden until authenticated via Google OAuth.
