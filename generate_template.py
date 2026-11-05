"""
Generate Excel Multi-Profile Portfolio Workbook.
Profiles:
- Naresh (Family & HUF: Naresh, Rekha, HUF)
- Abhishek (Abhishek, Family)

Tabs:
1. Portfolio: Multi-Profile & Multi-Year Asset Ledger
2. Banks: Bank balances (Savings + FD) per profile & holder
3. Brokers: US Demat & Brokerage accounts per profile
4. Profiles: Family entity definitions
"""

import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

wb = openpyxl.Workbook()

# Styling constants
HEADER_FILL = PatternFill(start_color="0F172A", end_color="0F172A", fill_type="solid")
HEADER_FONT = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
TITLE_FONT = Font(name="Calibri", size=14, bold=True, color="0F172A")
SUBTITLE_FONT = Font(name="Calibri", size=9, italic=True, color="64748B")
DATA_FONT = Font(name="Calibri", size=11, color="1E293B")
BOLD_FONT = Font(name="Calibri", size=11, bold=True, color="1E293B")
TOTAL_FILL = PatternFill(start_color="F1F5F9", end_color="F1F5F9", fill_type="solid")

thin_border = Border(
    left=Side(style='thin', color='E2E8F0'),
    right=Side(style='thin', color='E2E8F0'),
    top=Side(style='thin', color='E2E8F0'),
    bottom=Side(style='thin', color='E2E8F0')
)

double_bottom_border = Border(
    left=Side(style='thin', color='E2E8F0'),
    right=Side(style='thin', color='E2E8F0'),
    top=Side(style='thin', color='E2E8F0'),
    bottom=Side(style='double', color='0F172A')
)

# ----------------- Tab 1: Portfolio -----------------
ws_port = wb.active
ws_port.title = "Portfolio"

ws_port.merge_cells("A1:I1")
ws_port["A1"] = "Multi-Profile Family Wealth Portfolio"
ws_port["A1"].font = TITLE_FONT

ws_port.merge_cells("A2:I2")
ws_port["A2"] = "Profiles: Naresh (Naresh, Rekha, HUF) | Abhishek | All values in ₹ Lakhs unless specified"
ws_port["A2"].font = SUBTITLE_FONT

headers_port = [
    "Profile", "Entity / Member", "Date", "Asset Class", "Investment",
    "2024 Value (₹ L)", "2025 Value (₹ L)", "2026 Value (₹ L)", "Notes / Brokerage"
]

for col_num, h in enumerate(headers_port, 1):
    cell = ws_port.cell(row=4, column=col_num)
    cell.value = h
    cell.font = HEADER_FONT
    cell.fill = HEADER_FILL
    cell.alignment = Alignment(horizontal="center" if col_num <= 4 else ("right" if 6 <= col_num <= 8 else "left"), vertical="center")

# Naresh Profile Portfolio Data (Exact User Provided Data for 2026 with 2024/2025 History)
portfolio_data_naresh = [
    ("Naresh", "Naresh", "20/06/26", "Liquid / Cash", "Savings a/c", 42.10, 48.50, 55.313, "Across 6 Banks"),
    ("Naresh", "Rekha", "20/06/26", "Fixed Income", "FD", 1.00, 1.15, 1.290, "SBI Fixed Deposit"),
    ("Naresh", "HUF", "20/06/26", "Indian Equity", "Equity", 41.50, 52.00, 62.330, "Direct Equities (Zerodha)"),
    ("Naresh", "Naresh", "20/06/26", "Mutual Funds", "MF eq", 120.00, 150.00, 182.500, "Equity Mutual Funds"),
    ("Naresh", "Rekha", "20/06/26", "Mutual Funds", "MF arbitrage", 10.00, 12.00, 14.500, "Arbitrage Funds"),
    ("Naresh", "Naresh", "20/06/26", "Global Equity", "US equity", 45.00, 58.00, 71.190, "IBKR ($43,957) + Vested ($31,511)"),
    ("Naresh", "HUF", "20/06/26", "Fixed Income", "Bonds in demat", 0.00, 0.00, 0.000, "Demat Bonds"),
    ("Naresh", "HUF", "20/06/26", "Real Estate", "Fraction real estate", 15.00, 20.00, 25.000, "Commercial Real Estate"),
    ("Naresh", "Naresh", "20/06/26", "Employer Stock", "Uber stock", 260.00, 330.00, 412.530, "$UBER RSUs / Equity"),
    ("Naresh", "Naresh", "20/06/26", "Retirement", "EPF", 28.00, 32.50, 37.000, "Employee Provident Fund"),
    ("Naresh", "Rekha", "20/06/26", "Retirement", "PPF", 22.00, 25.10, 28.270, "Public Provident Fund"),
    ("Naresh", "HUF", "20/06/26", "Real Estate", "Land", 18.00, 19.00, 20.000, "Physical Land"),
    ("Naresh", "Naresh", "20/06/26", "Unlisted Equity", "Fk equity", 20.00, 24.00, 27.620, "Flipkart / Private Equity"),
    ("Naresh", "Naresh", "20/06/26", "Retirement", "NPS", 0.50, 0.65, 0.836, "National Pension Scheme"),
    ("Naresh", "HUF", "20/06/26", "PMS", "PMS", 45.00, 53.00, 62.220, "Portfolio Management Services"),
    ("Naresh", "Rekha", "20/06/26", "Fixed Income", "post office", 0.00, 0.00, 0.000, "Post Office Small Savings"),
]

# Abhishek Profile Portfolio Data
portfolio_data_abhishek = [
    ("Abhishek", "Abhishek", "20/06/26", "Employer Stock", "Uber stock", 280.00, 360.00, 412.530, "$UBER RSUs & Direct Grants"),
    ("Abhishek", "Abhishek", "20/06/26", "Global Equity", "US Demat (IBKR)", 35.00, 50.00, 71.190, "US Equities & Index Funds"),
    ("Abhishek", "Abhishek", "20/06/26", "Indian Equity", "Direct Equity", 25.00, 42.00, 62.330, "Zerodha Demat Portfolio"),
    ("Abhishek", "Abhishek", "20/06/26", "Mutual Funds", "Mutual Funds", 80.00, 130.00, 197.000, "Active Growth Mutual Funds"),
    ("Abhishek", "Abhishek", "20/06/26", "Liquid / Cash", "Bank Accounts", 30.00, 42.00, 55.313, "Salary & Savings Balances"),
    ("Abhishek", "Abhishek", "20/06/26", "Fixed Income", "Fixed Deposits", 1.00, 1.15, 1.290, "Emergency Term Deposit"),
    ("Abhishek", "Abhishek", "20/06/26", "Retirement", "EPF & NPS", 32.00, 46.00, 65.836, "Retirement Accounts"),
    ("Abhishek", "Abhishek", "20/06/26", "Real Estate", "Real Estate Holdings", 25.00, 35.00, 45.000, "Commercial & Land"),
]

all_portfolio_data = portfolio_data_naresh + portfolio_data_abhishek

start_row = 5
for idx, row in enumerate(all_portfolio_data):
    r = start_row + idx
    for c_idx, val in enumerate(row, 1):
        cell = ws_port.cell(row=r, column=c_idx, value=val)
        cell.font = DATA_FONT
        cell.border = thin_border
        if c_idx in (1, 2, 3, 4):
            cell.alignment = Alignment(horizontal="center")
        elif 6 <= c_idx <= 8:
            cell.alignment = Alignment(horizontal="right")
            cell.number_format = '#,##0.000'
        else:
            cell.alignment = Alignment(horizontal="left")

# ----------------- Tab 2: Banks -----------------
ws_bank = wb.create_sheet(title="Banks")
ws_bank.merge_cells("A1:G1")
ws_bank["A1"] = "Bank Balances & Fixed Deposits by Profile"
ws_bank["A1"].font = TITLE_FONT

ws_bank.merge_cells("A2:G2")
ws_bank["A2"] = "Values in ₹ Lakhs | Profiles: Naresh (Naresh, Rekha, HUF) & Abhishek"
ws_bank["A2"].font = SUBTITLE_FONT

bank_headers = ["Profile", "Bank Name", "Account Holder", "Savings Balance (₹ L)", "FD Amount (₹ L)", "Total with Bank (₹ L)", "Notes"]
for col_num, h in enumerate(bank_headers, 1):
    cell = ws_bank.cell(row=4, column=col_num)
    cell.value = h
    cell.font = HEADER_FONT
    cell.fill = HEADER_FILL
    cell.alignment = Alignment(horizontal="center" if col_num <= 3 else "right")

bank_rows = [
    ("Naresh", "HDFC", "Naresh", 21.930, 0.000, 21.930, "Primary Operating"),
    ("Naresh", "IDFC", "Rekha", 18.990, 0.000, 18.990, "Savings Account"),
    ("Naresh", "SBI", "Naresh", 11.675, 1.290, 12.965, "Savings + Term Deposit"),
    ("Naresh", "Axis", "HUF", 2.280, 0.000, 2.280, "HUF Operating"),
    ("Naresh", "ICICI", "Naresh", 0.278, 0.000, 0.278, "Secondary Account"),
    ("Naresh", "PNB", "Rekha", 0.160, 0.000, 0.160, "Savings Account"),
    ("Abhishek", "HDFC", "Abhishek", 25.000, 0.000, 25.000, "Salary Account"),
    ("Abhishek", "SBI", "Abhishek", 15.000, 1.290, 16.290, "Emergency Reserve"),
    ("Abhishek", "IDFC", "Abhishek", 15.313, 0.000, 15.313, "High Yield Savings"),
]

for idx, r_data in enumerate(bank_rows):
    r = 5 + idx
    for c_idx, val in enumerate(r_data, 1):
        cell = ws_bank.cell(row=r, column=c_idx, value=val)
        cell.font = DATA_FONT
        cell.border = thin_border
        if c_idx in (1, 2, 3):
            cell.alignment = Alignment(horizontal="center")
        elif 4 <= c_idx <= 6:
            cell.alignment = Alignment(horizontal="right")
            cell.number_format = '#,##0.000'

# ----------------- Tab 3: Brokers -----------------
ws_global = wb.create_sheet(title="Brokers")
ws_global.merge_cells("A1:G1")
ws_global["A1"] = "Overseas & Demat Accounts by Profile"
ws_global["A1"].font = TITLE_FONT

global_headers = ["Profile", "Platform", "Account Holder", "Category", "Currency", "Native Value", "USD/INR Rate", "Approx Value (₹ L)"]
for col_num, h in enumerate(global_headers, 1):
    cell = ws_global.cell(row=4, column=col_num)
    cell.value = h
    cell.font = HEADER_FONT
    cell.fill = HEADER_FILL
    cell.alignment = Alignment(horizontal="center" if col_num <= 5 else "right")

broker_rows = [
    ("Naresh", "IBKR", "Naresh", "US Brokerage", "USD", 43957.00, 86.50, 38.02),
    ("Naresh", "Vested", "Naresh", "US Brokerage", "USD", 31511.00, 86.50, 27.26),
    ("Naresh", "Zerodha", "HUF", "Indian Demat", "INR", 62.33, 1.00, 62.33),
    ("Naresh", "$UBER Stock", "Naresh", "Employer RSU", "INR", 412.53, 1.00, 412.53),
    ("Abhishek", "IBKR", "Abhishek", "US Brokerage", "USD", 43957.00, 86.50, 38.02),
    ("Abhishek", "Vested", "Abhishek", "US Brokerage", "USD", 31511.00, 86.50, 27.26),
    ("Abhishek", "$UBER Stock", "Abhishek", "Employer RSU", "INR", 412.53, 1.00, 412.53),
    ("Abhishek", "Zerodha", "Abhishek", "Indian Demat", "INR", 62.33, 1.00, 62.33),
]

for idx, r_data in enumerate(broker_rows):
    r = 5 + idx
    for c_idx, val in enumerate(r_data, 1):
        cell = ws_global.cell(row=r, column=c_idx, value=val)
        cell.font = DATA_FONT
        cell.border = thin_border
        if c_idx in (1, 2, 3, 4, 5):
            cell.alignment = Alignment(horizontal="center")
        elif c_idx >= 6:
            cell.alignment = Alignment(horizontal="right")
            cell.number_format = '#,##0.00'

# Auto fit column widths
for sheet in wb.worksheets:
    for col in sheet.columns:
        max_len = max(len(str(cell.value or '')) for cell in col)
        col_letter = get_column_letter(col[0].column)
        sheet.column_dimensions[col_letter].width = max(max_len + 3, 12)

wb.save("portfolio_template.xlsx")
print("Saved multi-profile portfolio_template.xlsx successfully!")
