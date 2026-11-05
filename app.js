/**
 * AK Wealth Portfolio Tracker
 * Client-Side Architecture for Free GitHub Pages Hosting
 * Multi-Profile System: Abhishek & Naresh (Naresh, Rekha, HUF)
 * First-Screen Profile Selection & Multi-Year Comparative Matrix
 * Configured for abhiqmar & Spreadsheet: 1RMO7qp-_m8GWbemlUNqdEDNijm33Q1Gs
 */

// ==========================================
// 1. Multi-Profile Configurations
// ==========================================

const PROFILES_CONFIG = {
  "Naresh": {
    name: "Naresh",
    displayName: "Naresh (Family & HUF)",
    description: "Multi-Asset Family Portfolio across Naresh, Rekha, and HUF accounts",
    icon: "🏛️",
    entities: ["Naresh", "Rekha", "HUF"],
    defaultHoldings: [
      { id: "h_savings", name: "Savings a/c", category: "Liquid / Cash", holder: "Naresh", notes: "Across 6 Banks (HDFC, SBI, IDFC, Axis, etc.)", values: { "2024": 42.100, "2025": 48.500, "2026": 55.313 } },
      { id: "h_fd", name: "FD", category: "Fixed Income", holder: "Rekha", notes: "SBI Fixed Term Deposit", values: { "2024": 1.000, "2025": 1.150, "2026": 1.290 } },
      { id: "h_equity", name: "Equity", category: "Indian Equity", holder: "HUF", notes: "Direct Equities (Zerodha Demat)", values: { "2024": 41.500, "2025": 52.000, "2026": 62.330 } },
      { id: "h_mfeq", name: "MF eq", category: "Mutual Funds", holder: "Naresh", notes: "Equity Mutual Funds", values: { "2024": 120.000, "2025": 150.000, "2026": 182.500 } },
      { id: "h_mfarb", name: "MF arbitrage", category: "Mutual Funds", holder: "Rekha", notes: "Arbitrage & Liquid Mutual Funds", values: { "2024": 10.000, "2025": 12.000, "2026": 14.500 } },
      { id: "h_usequity", name: "US equity", category: "Global Equity", holder: "Naresh", notes: "IBKR ($43,957) + Vested ($31,511)", values: { "2024": 45.000, "2025": 58.000, "2026": 71.190 } },
      { id: "h_bonds", name: "Bonds in demat", category: "Fixed Income", holder: "HUF", notes: "Corporate & Sovereign Bonds", values: { "2024": 0.000, "2025": 0.000, "2026": 0.000 } },
      { id: "h_frac_re", name: "Fraction real estate", category: "Real Estate", holder: "HUF", notes: "Commercial Grade-A Fractional RE", values: { "2024": 15.000, "2025": 20.000, "2026": 25.000 } },
      { id: "h_uber", name: "Uber stock", category: "Employer Stock", holder: "Naresh", notes: "$UBER RSUs & Direct Shares", values: { "2024": 260.000, "2025": 330.000, "2026": 412.530 } },
      { id: "h_epf", name: "EPF", category: "Retirement", holder: "Naresh", notes: "Employee Provident Fund", values: { "2024": 28.000, "2025": 32.500, "2026": 37.000 } },
      { id: "h_ppf", name: "PPF", category: "Retirement", holder: "Rekha", notes: "Public Provident Fund", values: { "2024": 22.000, "2025": 25.100, "2026": 28.270 } },
      { id: "h_land", name: "Land", category: "Real Estate", holder: "HUF", notes: "Physical Landed Property", values: { "2024": 18.000, "2025": 19.000, "2026": 20.000 } },
      { id: "h_fk", name: "Fk equity", category: "Unlisted Equity", holder: "Naresh", notes: "Flipkart / Unlisted Private Shares", values: { "2024": 20.000, "2025": 24.000, "2026": 27.620 } },
      { id: "h_nps", name: "NPS", category: "Retirement", holder: "Naresh", notes: "National Pension Scheme Tier-1", values: { "2024": 0.500, "2025": 0.650, "2026": 0.836 } },
      { id: "h_pms", name: "PMS", category: "PMS", holder: "HUF", notes: "Portfolio Management Services", values: { "2024": 45.000, "2025": 53.000, "2026": 62.220 } },
      { id: "h_post", name: "post office", category: "Fixed Income", holder: "Rekha", notes: "Post Office Small Savings", values: { "2024": 0.000, "2025": 0.000, "2026": 0.000 } }
    ],
    defaultBanks: [
      { bank: "HDFC", holder: "Naresh", savings: 21.930, fd: 0.000 },
      { bank: "IDFC", holder: "Rekha", savings: 18.990, fd: 0.000 },
      { bank: "SBI", holder: "Naresh", savings: 11.675, fd: 1.290 },
      { bank: "Axis", holder: "HUF", savings: 2.280, fd: 0.000 },
      { bank: "ICICI", holder: "Naresh", savings: 0.278, fd: 0.000 },
      { bank: "PNB", holder: "Rekha", savings: 0.160, fd: 0.000 },
    ],
    defaultBrokers: [
      { platform: "IBKR", category: "US Brokerage", holder: "Naresh", currency: "USD", nativeValue: 43957.00, notes: "Interactive Brokers US" },
      { platform: "Vested", category: "US Brokerage", holder: "Naresh", currency: "USD", nativeValue: 31511.00, notes: "Vested Finance Direct US" },
      { platform: "Zerodha", category: "Indian Demat", holder: "HUF", currency: "INR", nativeValue: 62.33, notes: "Kite / Coin Indian Equities" },
      { platform: "$UBER Stock", category: "Employer RSU / Equity", holder: "Naresh", currency: "INR", nativeValue: 412.53, notes: "Direct equity & vested grants" },
    ]
  },
  "Abhishek": {
    name: "Abhishek",
    displayName: "Abhishek",
    description: "High-Growth Tech Equity, Overseas Brokerages, and Family Assets",
    icon: "👤",
    entities: ["Abhishek", "Family"],
    defaultHoldings: [
      { id: "ab_uber", name: "Uber stock ($UBER)", category: "Employer Stock", holder: "Abhishek", notes: "$UBER RSUs & Vested Shares", values: { "2024": 280.000, "2025": 360.000, "2026": 412.530 } },
      { id: "ab_ibkr", name: "US Brokerage (IBKR)", category: "Global Equity", holder: "Abhishek", notes: "US Demat Equities", values: { "2024": 35.000, "2025": 50.000, "2026": 71.190 } },
      { id: "ab_zerodha", name: "Direct Equity", category: "Indian Equity", holder: "Abhishek", notes: "Zerodha Demat Portfolio", values: { "2024": 25.000, "2025": 42.000, "2026": 62.330 } },
      { id: "ab_mf", name: "Mutual Funds", category: "Mutual Funds", holder: "Abhishek", notes: "Growth Mutual Funds", values: { "2024": 80.000, "2025": 130.000, "2026": 197.000 } },
      { id: "ab_savings", name: "Bank Accounts", category: "Liquid / Cash", holder: "Abhishek", notes: "HDFC, SBI, IDFC Balances", values: { "2024": 30.000, "2025": 42.000, "2026": 55.313 } },
      { id: "ab_fd", name: "Fixed Deposits", category: "Fixed Income", holder: "Abhishek", notes: "Term Deposits", values: { "2024": 1.000, "2025": 1.150, "2026": 1.290 } },
      { id: "ab_retire", name: "Retirement (EPF & NPS)", category: "Retirement", holder: "Abhishek", notes: "Provident Fund & Pension", values: { "2024": 32.000, "2025": 46.000, "2026": 65.836 } },
      { id: "ab_re", name: "Real Estate", category: "Real Estate", holder: "Family", notes: "Commercial & Land Holdings", values: { "2024": 25.000, "2025": 35.000, "2026": 45.000 } },
    ],
    defaultBanks: [
      { bank: "HDFC", holder: "Abhishek", savings: 25.000, fd: 0.000 },
      { bank: "SBI", holder: "Abhishek", savings: 15.000, fd: 1.290 },
      { bank: "IDFC", holder: "Abhishek", savings: 15.313, fd: 0.000 },
    ],
    defaultBrokers: [
      { platform: "IBKR", category: "US Brokerage", holder: "Abhishek", currency: "USD", nativeValue: 43957.00, notes: "US Brokerage" },
      { platform: "Vested", category: "US Brokerage", holder: "Abhishek", currency: "USD", nativeValue: 31511.00, notes: "Vested Finance" },
      { platform: "$UBER Stock", category: "Employer Stock", holder: "Abhishek", currency: "INR", nativeValue: 412.53, notes: "Direct Equity" },
      { platform: "Zerodha", category: "Indian Demat", holder: "Abhishek", currency: "INR", nativeValue: 62.33, notes: "Kite Demat" },
    ]
  }
};

const INITIAL_YEARS = ["2024", "2025", "2026"];

// Application state
const state = {
  currentProfile: localStorage.getItem("ak_current_profile") || "Naresh",
  profileSelectedInitially: localStorage.getItem("ak_profile_initially_selected") === "true",
  holdings: [],
  banks: [],
  brokers: [],
  years: [...INITIAL_YEARS],
  entities: ["Naresh", "Rekha", "HUF"],
  selectedYear: "2026",
  selectedEntity: "ALL",
  usdInrRate: 86.50,
  activeUnit: "cr",
  activeTab: "overview",
  searchQuery: "",
  editingHoldingId: null,
  editingBankName: null,
  auth: {
    isLoggedIn: false,
    userEmail: null,
    userName: null,
    userAvatar: null,
    accessToken: null,
  },
  config: {
    clientId: localStorage.getItem("ak_client_id") || "",
    sheetId: localStorage.getItem("ak_sheet_id") || "1RMO7qp-_m8GWbemlUNqdEDNijm33Q1Gs",
    allowedEmail: localStorage.getItem("ak_allowed_email") || "",
  },
  charts: {
    singleAllocation: null,
    entityAllocation: null,
    multiYearTrend: null,
  }
};

// Load data for active profile
function loadProfileData(profileName) {
  state.currentProfile = profileName;
  localStorage.setItem("ak_current_profile", profileName);

  const profileCfg = PROFILES_CONFIG[profileName] || PROFILES_CONFIG["Naresh"];
  state.entities = [...profileCfg.entities];

  // Try loading from localStorage specific to this profile
  const storedHoldings = localStorage.getItem(`ak_holdings_${profileName}`);
  state.holdings = storedHoldings ? JSON.parse(storedHoldings) : JSON.parse(JSON.stringify(profileCfg.defaultHoldings));

  const storedBanks = localStorage.getItem(`ak_banks_${profileName}`);
  state.banks = storedBanks ? JSON.parse(storedBanks) : JSON.parse(JSON.stringify(profileCfg.defaultBanks));

  const storedBrokers = localStorage.getItem(`ak_brokers_${profileName}`);
  state.brokers = storedBrokers ? JSON.parse(storedBrokers) : JSON.parse(JSON.stringify(profileCfg.defaultBrokers));

  // Reset filter
  state.selectedEntity = "ALL";

  // Update profile pill in header
  const profilePill = document.getElementById("active-profile-pill");
  if (profilePill) {
    profilePill.innerHTML = `<span>${profileCfg.icon}</span> <span>Profile: <strong>${profileCfg.displayName}</strong></span> <span>⇄</span>`;
  }

  updateEntityDropdowns();
  renderUI();
}

// ==========================================
// 2. Profile Selection Overlay (First Screen)
// ==========================================
function checkInitialProfileSelection() {
  const overlay = document.getElementById("profile-selection-overlay");
  if (!overlay) return;

  if (state.auth.isLoggedIn && !state.profileSelectedInitially) {
    overlay.classList.add("active");
  } else {
    overlay.classList.remove("active");
  }
}

function selectProfile(profileName) {
  state.profileSelectedInitially = true;
  localStorage.setItem("ak_profile_initially_selected", "true");

  loadProfileData(profileName);

  const overlay = document.getElementById("profile-selection-overlay");
  if (overlay) overlay.classList.remove("active");

  showToast(`Loaded ${profileName}'s Portfolio!`, "success");
}

function openProfileModal() {
  const overlay = document.getElementById("profile-selection-overlay");
  if (overlay) overlay.classList.add("active");
}

// ==========================================
// 3. Indian Currency Formatting Helpers
// ==========================================
function formatIndianNumber(num) {
  if (isNaN(num)) return "0.00";
  const parts = Number(num).toFixed(2).split(".");
  let intPart = parts[0];
  const decPart = parts[1];
  
  const isNegative = intPart.startsWith("-");
  if (isNegative) intPart = intPart.substring(1);

  let lastThree = intPart.substring(intPart.length - 3);
  let otherNumbers = intPart.substring(0, intPart.length - 3);
  if (otherNumbers !== "") lastThree = "," + lastThree;
  let formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  if (isNegative) formatted = "-" + formatted;
  return formatted + "." + decPart;
}

function formatLakhsValue(valInLakhs, includeUnit = true) {
  const val = Number(valInLakhs || 0);
  if (state.activeUnit === "cr") {
    const cr = val / 100;
    return `₹${cr.toFixed(2)}${includeUnit ? " Cr" : ""}`;
  } else if (state.activeUnit === "lakh") {
    return `₹${val.toFixed(2)}${includeUnit ? " L" : ""}`;
  } else {
    const full = val * 100000;
    return `₹${formatIndianNumber(full)}`;
  }
}

function formatUSD(val) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(val);
}

function getEntityBadge(holder) {
  const h = (holder || "Owner").trim();
  const lower = h.toLowerCase();
  let badgeClass = "badge-holder-custom";
  if (lower === "naresh" || lower === "abhishek") badgeClass = "badge-holder-naresh";
  else if (lower === "rekha" || lower === "family") badgeClass = "badge-holder-rekha";
  else if (lower === "huf") badgeClass = "badge-holder-huf";

  return `<span class="badge-holder ${badgeClass}" title="Owner: ${h}">${h}</span>`;
}

function getBadgeClass(category = "", name = "") {
  const cat = category.toLowerCase();
  const n = name.toLowerCase();
  if (n.includes("uber")) return "badge-rsu";
  if (cat.includes("liquid") || cat.includes("cash")) return "badge-liquid";
  if (cat.includes("mutual fund")) return "badge-mf";
  if (cat.includes("global") || n.includes("us")) return "badge-global";
  if (cat.includes("equity")) return "badge-equity";
  if (cat.includes("fixed") || n.includes("fd")) return "badge-fixed";
  if (cat.includes("real estate") || n.includes("land")) return "badge-realestate";
  if (cat.includes("retirement") || n.includes("epf")) return "badge-retirement";
  if (cat.includes("pms")) return "badge-pms";
  return "badge-equity";
}

// ==========================================
// 4. Metrics & Calculation Engine
// ==========================================
function computeMetricsForYear(year, entity = "ALL") {
  const filteredHoldings = state.holdings.filter(h => {
    if (entity === "ALL") return true;
    return (h.holder || "").toLowerCase() === entity.toLowerCase();
  });

  const totalNetWorthLakhs = filteredHoldings.reduce((sum, item) => {
    return sum + (Number(item.values?.[year]) || 0);
  }, 0);

  let liquidCash = 0;
  let publicEquity = 0;
  let globalAndRSU = 0;
  let realEstateAlt = 0;

  filteredHoldings.forEach(item => {
    const val = Number(item.values?.[year]) || 0;
    const cat = (item.category || "").toLowerCase();
    const name = (item.name || "").toLowerCase();

    if (name.includes("uber") || cat.includes("global") || name.includes("us equity") || name.includes("ibkr")) {
      globalAndRSU += val;
    } else if (cat.includes("liquid") || cat.includes("cash") || cat.includes("fixed") || name.includes("fd")) {
      liquidCash += val;
    } else if (cat.includes("equity") || cat.includes("mutual fund") || cat.includes("pms")) {
      publicEquity += val;
    } else {
      realEstateAlt += val;
    }
  });

  const entityTotals = {};
  state.entities.forEach(ent => entityTotals[ent] = 0);
  state.holdings.forEach(item => {
    const val = Number(item.values?.[year]) || 0;
    const ent = item.holder || "Other";
    entityTotals[ent] = (entityTotals[ent] || 0) + val;
  });

  return {
    totalNetWorthLakhs,
    liquidCash,
    publicEquity,
    globalAndRSU,
    realEstateAlt,
    entityTotals,
    filteredHoldings
  };
}

// ==========================================
// 5. TAB 1: Minimalist Single-Year View
// ==========================================
function renderMinimalOverview() {
  const year = state.selectedYear;
  const entity = state.selectedEntity;
  const metrics = computeMetricsForYear(year, entity);

  const netWorthEl = document.getElementById("kpi-networth");
  if (netWorthEl) netWorthEl.textContent = formatLakhsValue(metrics.totalNetWorthLakhs);

  const subTextEl = document.getElementById("kpi-networth-sub");
  if (subTextEl) {
    const usdEquiv = formatUSD((metrics.totalNetWorthLakhs * 100000) / state.usdInrRate);
    const entityLabel = entity === "ALL" ? `All Accounts (${state.currentProfile})` : `${entity}'s Portfolio`;
    subTextEl.textContent = `${year} Fiscal Year • ${entityLabel} ≈ ${usdEquiv}`;
  }

  const kpiCash = document.getElementById("kpi-cash");
  if (kpiCash) kpiCash.textContent = formatLakhsValue(metrics.liquidCash);

  const kpiEquity = document.getElementById("kpi-equity");
  if (kpiEquity) kpiEquity.textContent = formatLakhsValue(metrics.publicEquity);

  const kpiUber = document.getElementById("kpi-uber");
  if (kpiUber) kpiUber.textContent = formatLakhsValue(metrics.globalAndRSU);

  const kpiUs = document.getElementById("kpi-us");
  if (kpiUs) kpiUs.textContent = formatLakhsValue(metrics.realEstateAlt);

  renderSingleYearTable(metrics.filteredHoldings, metrics.totalNetWorthLakhs, year);
  renderSingleYearCharts(metrics);
}

function renderSingleYearTable(holdings, totalNetWorth, year) {
  const tbody = document.getElementById("overview-top-tbody");
  if (!tbody) return;

  const filtered = holdings.filter(item => {
    if (!state.searchQuery) return true;
    const q = state.searchQuery.toLowerCase();
    return item.name.toLowerCase().includes(q) ||
      (item.category || "").toLowerCase().includes(q) ||
      (item.holder || "").toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:2rem; color:var(--text-muted);">No holdings found for selected year & filters.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const val = Number(item.values?.[year]) || 0;
    const share = totalNetWorth > 0 ? ((val / totalNetWorth) * 100).toFixed(2) : "0.00";
    const badgeClass = getBadgeClass(item.category, item.name);

    return `
      <tr>
        <td style="font-weight: 700; font-size: 0.95rem;">
          ${item.name}
          <div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${item.notes || "-"}</div>
        </td>
        <td><span class="badge ${badgeClass}">${item.category}</span></td>
        <td class="text-center">${getEntityBadge(item.holder)}</td>
        <td class="text-right" style="font-weight:700; font-size:1rem; font-variant-numeric:tabular-nums;">${formatLakhsValue(val)}</td>
        <td class="text-right" style="color:var(--accent-emerald); font-weight:700;">${share}%</td>
        <td class="text-right">
          <button class="action-btn-sm" onclick="openHoldingModal('${item.id}')">✏️ Edit</button>
        </td>
      </tr>
    `;
  }).join("");

  const tfoot = document.getElementById("overview-table-tfoot");
  if (tfoot) {
    const sumVal = filtered.reduce((acc, it) => acc + (Number(it.values?.[year]) || 0), 0);
    const sumPct = totalNetWorth > 0 ? ((sumVal / totalNetWorth) * 100).toFixed(2) : "0.00";
    tfoot.innerHTML = `
      <tr class="total-row">
        <td colspan="3" class="text-right" style="font-weight:700; text-transform:uppercase;">Total (${filtered.length} Holdings)</td>
        <td class="text-right" style="color:var(--accent-emerald); font-weight:800; font-size:1.05rem;">${formatLakhsValue(sumVal)}</td>
        <td class="text-right" style="color:var(--accent-emerald); font-weight:800;">${sumPct}%</td>
        <td></td>
      </tr>
    `;
  }
}

function renderSingleYearCharts(metrics) {
  if (typeof Chart === "undefined") return;

  // Chart 1: Asset Allocation Donut
  const allocCtx = document.getElementById("chart-allocation")?.getContext("2d");
  if (allocCtx) {
    if (state.charts.singleAllocation) state.charts.singleAllocation.destroy();

    const dataPoints = [
      { label: "Liquid Cash & FDs", value: metrics.liquidCash, color: "#10b981" },
      { label: "Equities & MFs", value: metrics.publicEquity, color: "#0ea5e9" },
      { label: "Global & Uber Stock", value: metrics.globalAndRSU, color: "#8b5cf6" },
      { label: "Real Estate & Alts", value: metrics.realEstateAlt, color: "#f59e0b" },
    ].filter(d => d.value > 0);

    state.charts.singleAllocation = new Chart(allocCtx, {
      type: "doughnut",
      data: {
        labels: dataPoints.map(d => d.label),
        datasets: [{
          data: dataPoints.map(d => d.value),
          backgroundColor: dataPoints.map(d => d.color),
          borderWidth: 2,
          borderColor: "#141c2e",
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "right", labels: { color: "#94a3b8", font: { size: 11 }, boxWidth: 12, padding: 8 } },
          tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: ${formatLakhsValue(ctx.raw)}` } }
        },
        cutout: "68%",
      }
    });
  }

  // Chart 2: Family / Entity Share Donut
  const entCtx = document.getElementById("chart-entity-share")?.getContext("2d");
  if (entCtx) {
    if (state.charts.entityAllocation) state.charts.entityAllocation.destroy();

    const entLabels = Object.keys(metrics.entityTotals).filter(k => metrics.entityTotals[k] > 0);
    const entVals = entLabels.map(k => metrics.entityTotals[k]);
    const colors = ["#10b981", "#fb7185", "#f59e0b", "#0ea5e9", "#a855f7"];

    state.charts.entityAllocation = new Chart(entCtx, {
      type: "doughnut",
      data: {
        labels: entLabels,
        datasets: [{
          data: entVals,
          backgroundColor: colors.slice(0, entLabels.length),
          borderWidth: 2,
          borderColor: "#141c2e",
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "right", labels: { color: "#94a3b8", font: { size: 11 }, boxWidth: 12, padding: 8 } },
          tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: ${formatLakhsValue(ctx.raw)}` } }
        },
        cutout: "68%",
      }
    });
  }
}

// ==========================================
// 6. TAB 2: Multi-Year Comparative Matrix
// ==========================================
function renderMultiYearMatrix() {
  const tbody = document.getElementById("multiyear-tbody");
  const thead = document.getElementById("multiyear-thead");
  const tfoot = document.getElementById("multiyear-tfoot");
  if (!tbody || !thead) return;

  const entity = state.selectedEntity;
  const filtered = state.holdings.filter(h => {
    if (entity === "ALL") return true;
    return (h.holder || "").toLowerCase() === entity.toLowerCase();
  });

  thead.innerHTML = `
    <tr>
      <th>Investment Asset</th>
      <th>Category</th>
      <th class="text-center">Entity / Holder</th>
      ${state.years.map(yr => `<th class="text-right">${yr} (₹ L)</th>`).join("")}
      <th class="text-right">YoY Growth (%)</th>
      <th class="text-right">Actions</th>
    </tr>
  `;

  const latestYr = state.years[state.years.length - 1];
  const prevYr = state.years.length >= 2 ? state.years[state.years.length - 2] : null;

  tbody.innerHTML = filtered.map(item => {
    const badgeClass = getBadgeClass(item.category, item.name);
    const latestVal = Number(item.values?.[latestYr]) || 0;
    const prevVal = prevYr ? (Number(item.values?.[prevYr]) || 0) : 0;
    
    let growthText = "-";
    if (prevVal > 0) {
      const growth = (((latestVal - prevVal) / prevVal) * 100).toFixed(1);
      const isPositive = growth >= 0;
      growthText = `<span style="color:${isPositive ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; font-weight:700;">${isPositive ? '+' : ''}${growth}%</span>`;
    }

    return `
      <tr>
        <td style="font-weight: 700; font-size: 0.95rem;">
          ${item.name}
          <div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${item.notes || "-"}</div>
        </td>
        <td><span class="badge ${badgeClass}">${item.category}</span></td>
        <td class="text-center">${getEntityBadge(item.holder)}</td>
        ${state.years.map(yr => {
          const v = Number(item.values?.[yr]) || 0;
          return `<td class="text-right" style="font-variant-numeric:tabular-nums; font-weight:600;">${formatLakhsValue(v)}</td>`;
        }).join("")}
        <td class="text-right">${growthText}</td>
        <td class="text-right">
          <button class="action-btn-sm" onclick="openHoldingModal('${item.id}')">✏️ Edit</button>
        </td>
      </tr>
    `;
  }).join("");

  if (tfoot) {
    const yearTotals = state.years.map(yr => {
      return filtered.reduce((sum, it) => sum + (Number(it.values?.[yr]) || 0), 0);
    });

    const latestTot = yearTotals[yearTotals.length - 1] || 0;
    const prevTot = yearTotals.length >= 2 ? yearTotals[yearTotals.length - 2] : 0;
    let totalGrowthText = "-";
    if (prevTot > 0) {
      const g = (((latestTot - prevTot) / prevTot) * 100).toFixed(1);
      totalGrowthText = `<span style="color:var(--accent-emerald); font-weight:800;">+${g}%</span>`;
    }

    tfoot.innerHTML = `
      <tr class="total-row">
        <td colspan="3" class="text-right" style="text-transform:uppercase; font-weight:700;">Total Net Worth (${entity})</td>
        ${yearTotals.map(t => `<td class="text-right" style="color:var(--accent-emerald); font-weight:800; font-size:1.05rem;">${formatLakhsValue(t)}</td>`).join("")}
        <td class="text-right">${totalGrowthText}</td>
        <td></td>
      </tr>
    `;
  }

  renderMultiYearChart(filtered);
}

function renderMultiYearChart(filteredHoldings) {
  if (typeof Chart === "undefined") return;

  const ctx = document.getElementById("chart-multiyear-trend")?.getContext("2d");
  if (!ctx) return;

  if (state.charts.multiYearTrend) state.charts.multiYearTrend.destroy();

  const labels = state.years;
  const datasets = [];
  const entities = state.selectedEntity === "ALL" ? state.entities : [state.selectedEntity];
  const colorMap = { "Naresh": "#10b981", "Rekha": "#fb7185", "HUF": "#f59e0b", "Abhishek": "#0ea5e9", "Family": "#a855f7" };

  entities.forEach((ent) => {
    const data = labels.map(yr => {
      return filteredHoldings
        .filter(h => (h.holder || "").toLowerCase() === ent.toLowerCase())
        .reduce((sum, h) => sum + (Number(h.values?.[yr]) || 0), 0);
    });

    datasets.push({
      label: ent,
      data: data,
      backgroundColor: colorMap[ent] || "#3b82f6",
      borderRadius: 6,
    });
  });

  state.charts.multiYearTrend = new Chart(ctx, {
    type: "bar",
    data: { labels: labels, datasets: datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top", labels: { color: "#94a3b8", font: { size: 11 } } },
        tooltip: { callbacks: { label: (ctx) => ` ${ctx.dataset.label}: ${formatLakhsValue(ctx.raw)}` } }
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: "#94a3b8" } },
        y: { stacked: true, grid: { color: "#1f293d" }, ticks: { color: "#94a3b8", callback: (v) => formatLakhsValue(v, false) } }
      }
    }
  });
}

// ==========================================
// 7. Holding Modal (Add / Edit Asset & Entity)
// ==========================================
function openHoldingModal(holdingId = null) {
  state.editingHoldingId = holdingId;
  const modalTitle = document.getElementById("holding-modal-title");
  const nameInput = document.getElementById("holding-name-input");
  const catInput = document.getElementById("holding-category-select");
  const entitySelect = document.getElementById("holding-entity-select");
  const customEntityInput = document.getElementById("holding-custom-entity");
  const customEntityGroup = document.getElementById("holding-custom-entity-group");
  const notesInput = document.getElementById("holding-notes-input");

  // Populate entity dropdown options based on current profile
  if (entitySelect) {
    entitySelect.innerHTML = `
      ${state.entities.map(e => `<option value="${e}">${e}</option>`).join("")}
      <option value="CUSTOM">➕ Add New Entity Name...</option>
    `;
  }

  const yearInputsContainer = document.getElementById("holding-year-inputs-container");
  if (yearInputsContainer) {
    yearInputsContainer.innerHTML = state.years.map(yr => `
      <div class="form-group" style="flex: 1; min-width: 120px;">
        <label class="form-label">${yr} Value (₹ Lakhs)</label>
        <input type="number" id="holding-val-${yr}" class="form-input" step="0.001" min="0" placeholder="0.00" />
      </div>
    `).join("");
  }

  if (holdingId) {
    const item = state.holdings.find(h => h.id === holdingId);
    if (item) {
      modalTitle.innerHTML = `<span>✏️</span> Edit Holding: ${item.name}`;
      nameInput.value = item.name;
      catInput.value = item.category || "Indian Equity";
      notesInput.value = item.notes || "";

      const holder = item.holder || state.entities[0];
      if (state.entities.includes(holder)) {
        entitySelect.value = holder;
        if (customEntityGroup) customEntityGroup.style.display = "none";
      } else {
        entitySelect.value = "CUSTOM";
        if (customEntityGroup) customEntityGroup.style.display = "block";
        if (customEntityInput) customEntityInput.value = holder;
      }

      state.years.forEach(yr => {
        const valInp = document.getElementById(`holding-val-${yr}`);
        if (valInp) valInp.value = item.values?.[yr] || 0;
      });
    }
  } else {
    modalTitle.innerHTML = `<span>➕</span> Add Portfolio Holding`;
    nameInput.value = "";
    catInput.value = "Indian Equity";
    entitySelect.value = state.entities[0];
    if (customEntityGroup) customEntityGroup.style.display = "none";
    if (customEntityInput) customEntityInput.value = "";
    notesInput.value = "";

    state.years.forEach(yr => {
      const valInp = document.getElementById(`holding-val-${yr}`);
      if (valInp) valInp.value = "";
    });
  }

  openModal("holding-modal");
}

function saveHolding(e) {
  e.preventDefault();
  const nameInput = document.getElementById("holding-name-input");
  const catInput = document.getElementById("holding-category-select");
  const entitySelect = document.getElementById("holding-entity-select");
  const customEntityInput = document.getElementById("holding-custom-entity");
  const notesInput = document.getElementById("holding-notes-input");

  const name = nameInput.value.trim();
  if (!name) {
    showToast("Please enter an asset name.", "error");
    return;
  }

  let holder = entitySelect.value;
  if (holder === "CUSTOM") {
    holder = customEntityInput.value.trim() || "Other";
  }

  if (!state.entities.includes(holder)) {
    state.entities.push(holder);
    updateEntityDropdowns();
  }

  const values = {};
  state.years.forEach(yr => {
    const valInp = document.getElementById(`holding-val-${yr}`);
    values[yr] = Math.max(0, parseFloat(valInp?.value || 0) || 0);
  });

  if (state.editingHoldingId) {
    const idx = state.holdings.findIndex(h => h.id === state.editingHoldingId);
    if (idx >= 0) {
      state.holdings[idx].name = name;
      state.holdings[idx].category = catInput.value;
      state.holdings[idx].holder = holder;
      state.holdings[idx].notes = notesInput.value.trim();
      state.holdings[idx].values = values;
      showToast(`Updated ${name}!`, "success");
    }
  } else {
    const newId = "h_" + Date.now();
    state.holdings.push({
      id: newId,
      name,
      category: catInput.value,
      holder,
      notes: notesInput.value.trim(),
      values
    });
    showToast(`Added ${name} for ${holder}!`, "success");
  }

  localStorage.setItem(`ak_holdings_${state.currentProfile}`, JSON.stringify(state.holdings));

  closeModal("holding-modal");
  renderUI();
}

function updateEntityDropdowns() {
  const overSelect = document.getElementById("overview-entity-select");
  const multiSelect = document.getElementById("multiyear-entity-select");

  const opts = `
    <option value="ALL">👨‍👩‍👧 All Entities (${state.currentProfile})</option>
    ${state.entities.map(e => `<option value="${e}">${e}</option>`).join("")}
  `;

  if (overSelect) overSelect.innerHTML = opts;
  if (multiSelect) multiSelect.innerHTML = opts;
}

// ==========================================
// 8. TAB 3: Banks & Cash
// ==========================================
function renderBanksSection() {
  const grid = document.getElementById("bank-cards-container");
  const tbody = document.getElementById("bank-table-tbody");

  const totalBankLiquid = state.banks.reduce((acc, b) => acc + (Number(b.savings) || 0) + (Number(b.fd) || 0), 0);

  if (grid) {
    grid.innerHTML = state.banks.map(b => {
      const sav = Number(b.savings) || 0;
      const fd = Number(b.fd) || 0;
      const total = sav + fd;
      const pct = totalBankLiquid > 0 ? ((total / totalBankLiquid) * 100).toFixed(1) : "0.0";
      return `
        <div class="bank-card">
          <div class="bank-card-header">
            <div class="bank-name">
              <span class="bank-logo-icon">${b.bank.substring(0, 3).toUpperCase()}</span>
              <span>${b.bank.toUpperCase()} Bank</span>
            </div>
            ${getEntityBadge(b.holder || state.entities[0])}
          </div>
          <div class="bank-rows">
            <div class="bank-row">
              <span>Savings Balance</span>
              <span class="val">${formatLakhsValue(sav)}</span>
            </div>
            <div class="bank-row">
              <span>Fixed Deposits (FD)</span>
              <span class="val">${fd > 0 ? formatLakhsValue(fd) : "₹0.00"}</span>
            </div>
          </div>
          <div class="bank-card-total">
            <span class="total-label">Total With Bank</span>
            <span class="total-amount">${formatLakhsValue(total)}</span>
          </div>
          <div class="bank-card-actions">
            <button class="action-btn-sm" onclick="openBankModal('${b.bank}')">✏️ Edit Amounts</button>
            <button class="action-btn-sm delete" onclick="deleteBankAccount('${b.bank}')" title="Delete Account">🗑️</button>
          </div>
        </div>
      `;
    }).join("");
  }

  if (tbody) {
    tbody.innerHTML = state.banks.map(b => {
      const sav = Number(b.savings) || 0;
      const fd = Number(b.fd) || 0;
      const total = sav + fd;
      const pct = totalBankLiquid > 0 ? ((total / totalBankLiquid) * 100).toFixed(2) : "0.00";
      return `
        <tr>
          <td style="font-weight:700;">${b.bank.toUpperCase()} Bank</td>
          <td class="text-center">${getEntityBadge(b.holder || state.entities[0])}</td>
          <td class="text-right" style="font-variant-numeric:tabular-nums;">${formatLakhsValue(sav)}</td>
          <td class="text-right" style="font-variant-numeric:tabular-nums;">${fd > 0 ? formatLakhsValue(fd) : "₹0.00"}</td>
          <td class="text-right" style="font-weight:700; color:var(--accent-emerald); font-variant-numeric:tabular-nums;">${formatLakhsValue(total)}</td>
          <td class="text-right" style="color:var(--text-secondary);">${pct}%</td>
          <td class="text-right" style="white-space:nowrap;">
            <button class="action-btn-sm" onclick="openBankModal('${b.bank}')">✏️ Edit</button>
            <button class="action-btn-sm delete" onclick="deleteBankAccount('${b.bank}')">🗑️</button>
          </td>
        </tr>
      `;
    }).join("");

    const totSav = state.banks.reduce((acc, b) => acc + (Number(b.savings) || 0), 0);
    const totFd = state.banks.reduce((acc, b) => acc + (Number(b.fd) || 0), 0);
    const totAll = totSav + totFd;

    const tfoot = document.getElementById("bank-table-tfoot");
    if (tfoot) {
      tfoot.innerHTML = `
        <tr class="total-row">
          <td>Total Bank Balances</td>
          <td></td>
          <td class="text-right">${formatLakhsValue(totSav)}</td>
          <td class="text-right">${formatLakhsValue(totFd)}</td>
          <td class="text-right" style="color:var(--accent-emerald); font-weight:800;">${formatLakhsValue(totAll)}</td>
          <td class="text-right">100.0%</td>
          <td></td>
        </tr>
      `;
    }
  }
}

function openBankModal(bankName = null) {
  state.editingBankName = bankName;
  const modalTitle = document.getElementById("bank-modal-title");
  const dropdown = document.getElementById("bank-select-dropdown");
  const customGroup = document.getElementById("custom-bank-group");
  const customInput = document.getElementById("bank-name-input");
  const bankSavingsInput = document.getElementById("bank-savings-input");
  const bankFdInput = document.getElementById("bank-fd-input");
  const bankEntitySelect = document.getElementById("bank-entity-select");

  // Populate entity dropdown for bank modal
  if (bankEntitySelect) {
    bankEntitySelect.innerHTML = state.entities.map(e => `<option value="${e}">${e}</option>`).join("");
  }

  if (bankName) {
    modalTitle.innerHTML = `<span>✏️</span> Edit Bank: ${bankName.toUpperCase()}`;
    const existing = state.banks.find(b => b.bank.toLowerCase() === bankName.toLowerCase());
    
    let matched = false;
    if (dropdown) {
      for (let i = 0; i < dropdown.options.length; i++) {
        const opt = dropdown.options[i];
        if (opt.value && (opt.value.toLowerCase() === bankName.toLowerCase() || bankName.toLowerCase().includes(opt.value.toLowerCase()))) {
          dropdown.value = opt.value;
          matched = true;
          break;
        }
      }
      if (!matched) {
        dropdown.value = "CUSTOM";
        if (customGroup) customGroup.style.display = "block";
        if (customInput) customInput.value = bankName;
      } else {
        if (customGroup) customGroup.style.display = "none";
      }
    }

    if (existing) {
      if (bankSavingsInput) bankSavingsInput.value = existing.savings || 0;
      if (bankFdInput) bankFdInput.value = existing.fd || 0;
      if (bankEntitySelect) bankEntitySelect.value = existing.holder || state.entities[0];
    }
  } else {
    modalTitle.innerHTML = `<span>➕</span> Add Bank Savings & FD Account`;
    if (dropdown) dropdown.value = "";
    if (customGroup) customGroup.style.display = "none";
    if (customInput) customInput.value = "";
    if (bankSavingsInput) bankSavingsInput.value = "";
    if (bankFdInput) bankFdInput.value = "";
    if (bankEntitySelect) bankEntitySelect.value = state.entities[0];
  }

  updateBankModalLivePreview();
  openModal("bank-modal");
}

function updateBankModalLivePreview() {
  const sav = parseFloat(document.getElementById("bank-savings-input")?.value || 0) || 0;
  const fd = parseFloat(document.getElementById("bank-fd-input")?.value || 0) || 0;
  const total = sav + fd;

  const previewEl = document.getElementById("bank-total-preview");
  if (previewEl) {
    previewEl.textContent = `₹${total.toFixed(3)} Lakhs (= ₹${formatIndianNumber(total * 100000)})`;
  }
}

function saveBankAccount(e) {
  e.preventDefault();
  const dropdown = document.getElementById("bank-select-dropdown");
  const customInput = document.getElementById("bank-name-input");
  const bankSavingsInput = document.getElementById("bank-savings-input");
  const bankFdInput = document.getElementById("bank-fd-input");
  const bankEntitySelect = document.getElementById("bank-entity-select");

  let bankName = "";
  if (dropdown && dropdown.value === "CUSTOM") {
    bankName = customInput ? customInput.value.trim() : "";
  } else if (dropdown && dropdown.value) {
    bankName = dropdown.value;
  } else if (customInput && customInput.value.trim()) {
    bankName = customInput.value.trim();
  }

  const savings = Math.max(0, parseFloat(bankSavingsInput.value) || 0);
  const fd = Math.max(0, parseFloat(bankFdInput.value) || 0);
  const holder = bankEntitySelect ? bankEntitySelect.value : state.entities[0];

  if (!bankName) {
    showToast("Please choose a bank from the dropdown list.", "error");
    return;
  }

  const idx = state.banks.findIndex(b => b.bank.toLowerCase() === bankName.toLowerCase());
  if (idx >= 0) {
    state.banks[idx].savings = savings;
    state.banks[idx].fd = fd;
    state.banks[idx].holder = holder;
    showToast(`Updated ${bankName} Bank balance!`, "success");
  } else {
    state.banks.push({ bank: bankName, holder, savings, fd });
    showToast(`Added ${bankName} Bank successfully!`, "success");
  }

  syncBankTotalsToHoldings();

  localStorage.setItem(`ak_banks_${state.currentProfile}`, JSON.stringify(state.banks));
  localStorage.setItem(`ak_holdings_${state.currentProfile}`, JSON.stringify(state.holdings));

  closeModal("bank-modal");
  renderUI();
}

function deleteBankAccount(bankName) {
  if (!confirm(`Are you sure you want to remove ${bankName} Bank from this profile?`)) return;

  state.banks = state.banks.filter(b => b.bank.toLowerCase() !== bankName.toLowerCase());
  syncBankTotalsToHoldings();

  localStorage.setItem(`ak_banks_${state.currentProfile}`, JSON.stringify(state.banks));
  localStorage.setItem(`ak_holdings_${state.currentProfile}`, JSON.stringify(state.holdings));

  showToast(`Removed ${bankName} Bank.`, "info");
  renderUI();
}

function syncBankTotalsToHoldings() {
  const totSavings = state.banks.reduce((acc, b) => acc + (Number(b.savings) || 0), 0);
  const totFD = state.banks.reduce((acc, b) => acc + (Number(b.fd) || 0), 0);

  const savItem = state.holdings.find(p => p.name.toLowerCase().includes("savings"));
  if (savItem) {
    if (!savItem.values) savItem.values = {};
    savItem.values["2026"] = Number(totSavings.toFixed(3));
  }

  const fdItem = state.holdings.find(p => p.name.toLowerCase() === "fd");
  if (fdItem) {
    if (!fdItem.values) fdItem.values = {};
    fdItem.values["2026"] = Number(totFD.toFixed(3));
  }
}

// ==========================================
// 9. TAB 4: Brokers & US Demat
// ==========================================
function renderBrokersTable() {
  const tbody = document.getElementById("brokers-tbody");
  if (!tbody) return;

  tbody.innerHTML = state.brokers.map(b => {
    let nativeDisplay = "";
    let approxLakhs = 0;

    if (b.currency === "USD") {
      nativeDisplay = formatUSD(b.nativeValue);
      approxLakhs = (b.nativeValue * state.usdInrRate) / 100000;
    } else {
      nativeDisplay = `₹${b.nativeValue.toFixed(2)} Lakhs`;
      approxLakhs = b.nativeValue;
    }

    return `
      <tr>
        <td style="font-weight:700; font-size:0.95rem;">
          ${b.platform}
          <div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${b.notes}</div>
        </td>
        <td><span class="badge ${b.currency === 'USD' ? 'badge-global' : 'badge-equity'}">${b.category}</span></td>
        <td class="text-center">${getEntityBadge(b.holder || state.entities[0])}</td>
        <td class="text-center"><span class="badge badge-fixed">${b.currency}</span></td>
        <td class="text-right" style="font-weight:700; font-variant-numeric:tabular-nums;">${nativeDisplay}</td>
        <td class="text-right" style="color:var(--text-secondary); font-size:0.85rem;">
          ${b.currency === 'USD' ? `₹${state.usdInrRate.toFixed(2)} / $` : '1.00'}
        </td>
        <td class="text-right" style="font-weight:800; color:var(--accent-emerald); font-size:1rem;">
          ${formatLakhsValue(approxLakhs)}
        </td>
      </tr>
    `;
  }).join("");
}

// ==========================================
// 10. Master UI Dispatcher
// ==========================================
function renderUI() {
  renderMinimalOverview();
  renderMultiYearMatrix();
  renderBanksSection();
  renderBrokersTable();
  updateAuthUI();

  const fxPill = document.getElementById("fx-rate-display");
  if (fxPill) fxPill.textContent = `₹${state.usdInrRate.toFixed(2)}`;
  const fxInput = document.getElementById("fx-rate-input");
  if (fxInput) fxInput.value = state.usdInrRate.toFixed(2);
}

// ==========================================
// 11. Google Identity Services (GIS) & OAuth 2.0
// Zero Private Key - 100% Client-Side
// ==========================================
let tokenClient = null;

function initGoogleOAuth() {
  if (!state.config.clientId) return;

  if (typeof google === "undefined" || !google.accounts || !google.accounts.oauth2) {
    setTimeout(initGoogleOAuth, 1000);
    return;
  }

  try {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: state.config.clientId,
      scope: "https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
      callback: handleOAuthResponse,
    });
  } catch (err) {
    console.error("GIS OAuth initialization error:", err);
  }
}

function handleLoginClick() {
  if (state.auth.isLoggedIn) {
    handleLogout();
    return;
  }

  if (!state.config.clientId) {
    openModal("settings-modal");
    showToast("Please enter your Google OAuth Client ID in Settings first.", "info");
    return;
  }

  if (!tokenClient) initGoogleOAuth();

  if (tokenClient) {
    tokenClient.requestAccessToken({ prompt: "consent" });
  } else {
    showToast("OAuth client is not ready. Verify Client ID.", "error");
  }
}

async function handleOAuthResponse(resp) {
  if (resp.error) {
    showToast(`OAuth Error: ${resp.error}`, "error");
    return;
  }

  state.auth.accessToken = resp.access_token;

  try {
    const profileRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${state.auth.accessToken}` }
    });
    const profile = await profileRes.json();

    if (state.config.allowedEmail && state.config.allowedEmail.trim() !== "") {
      const allowed = state.config.allowedEmail.trim().toLowerCase();
      const actual = (profile.email || "").toLowerCase();
      if (actual !== allowed) {
        showToast(`Access Denied: Logged in as ${profile.email}, but only ${state.config.allowedEmail} is authorized.`, "error");
        handleLogout();
        return;
      }
    }

    state.auth.isLoggedIn = true;
    state.auth.userEmail = profile.email;
    state.auth.userName = profile.name;
    state.auth.userAvatar = profile.picture;

    // Save session so page refresh stays unlocked during the session
    try {
      sessionStorage.setItem("ak_session_token", state.auth.accessToken);
      sessionStorage.setItem("ak_session_user", JSON.stringify(profile));
    } catch (e) {}

    showToast(`Welcome ${profile.name || profile.email}! Dashboard unlocked.`, "success");
    updateAuthUI();
    fetchGoogleSheetData();
  } catch (err) {
    console.error("Error fetching user profile:", err);
    showToast("Error retrieving profile from Google", "error");
  }
}

function handleLogout() {
  if (state.auth.accessToken && typeof google !== "undefined" && google.accounts && google.accounts.oauth2) {
    try {
      google.accounts.oauth2.revoke(state.auth.accessToken, () => console.log("Token revoked"));
    } catch (e) {}
  }
  try {
    sessionStorage.removeItem("ak_session_token");
    sessionStorage.removeItem("ak_session_user");
  } catch (e) {}

  state.auth.isLoggedIn = false;
  state.auth.userEmail = null;
  state.auth.userName = null;
  state.auth.userAvatar = null;
  state.auth.accessToken = null;
  showToast("Logged out. Dashboard locked.", "info");
  updateAuthUI();
}

function restoreSessionIfValid() {
  try {
    const token = sessionStorage.getItem("ak_session_token");
    const userStr = sessionStorage.getItem("ak_session_user");
    if (token && userStr) {
      const user = JSON.parse(userStr);
      state.auth.isLoggedIn = true;
      state.auth.accessToken = token;
      state.auth.userEmail = user.email;
      state.auth.userName = user.name;
      state.auth.userAvatar = user.picture;
    }
  } catch (e) {}
}

function updateAuthUI() {
  const loginBtn = document.getElementById("auth-btn");
  const authStatusChip = document.getElementById("auth-status-chip");
  const userDisplay = document.getElementById("user-profile-display");
  const authLockGate = document.getElementById("auth-lock-gate");
  const dashboardMain = document.getElementById("dashboard-main");
  const activeProfilePill = document.getElementById("active-profile-pill");
  const unitToggle = document.querySelector(".unit-toggle");
  const fxPill = document.querySelector(".fx-pill");

  if (state.auth.isLoggedIn) {
    if (authLockGate) authLockGate.style.display = "none";
    if (dashboardMain) dashboardMain.style.display = "block";
    if (activeProfilePill) activeProfilePill.style.display = "flex";
    if (unitToggle) unitToggle.style.display = "flex";
    if (fxPill) fxPill.style.display = "flex";

    if (loginBtn) {
      loginBtn.innerHTML = `<span>Sign Out (${(state.auth.userEmail || '').split('@')[0]})</span>`;
      loginBtn.classList.remove("btn-primary");
      loginBtn.classList.add("btn-secondary");
    }
    if (authStatusChip) {
      authStatusChip.className = "security-status-chip";
      authStatusChip.innerHTML = `🔒 <span>Authorized (${state.auth.userEmail})</span>`;
    }
    if (userDisplay) {
      userDisplay.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.5rem;">
          ${state.auth.userAvatar ? `<img src="${state.auth.userAvatar}" style="width:24px;height:24px;border-radius:50%;" />` : ''}
          <span style="font-size:0.8rem; font-weight:600;">${state.auth.userName || state.auth.userEmail}</span>
        </div>
      `;
    }

    checkInitialProfileSelection();
    renderUI();
  } else {
    if (authLockGate) authLockGate.style.display = "flex";
    if (dashboardMain) dashboardMain.style.display = "none";
    if (activeProfilePill) activeProfilePill.style.display = "none";
    if (unitToggle) unitToggle.style.display = "none";
    if (fxPill) fxPill.style.display = "none";

    const overlay = document.getElementById("profile-selection-overlay");
    if (overlay) overlay.classList.remove("active");

    if (loginBtn) {
      loginBtn.innerHTML = `<span>🔒 Sign in with Google</span>`;
      loginBtn.classList.remove("btn-secondary");
      loginBtn.classList.add("btn-primary");
    }
    if (authStatusChip) {
      authStatusChip.className = "security-status-chip unauth";
      authStatusChip.innerHTML = `🔒 <span>Private Ledger Locked (Sign In Required)</span>`;
    }
    if (userDisplay) userDisplay.innerHTML = "";
  }
}

async function fetchGoogleSheetData() {
  if (!state.auth.isLoggedIn || !state.auth.accessToken) return;
  const sheetId = state.config.sheetId;
  if (!sheetId) return;

  showToast("Syncing with private Google Sheet...", "info");
  try {
    const metaRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?fields=sheets.properties`, {
      headers: { Authorization: `Bearer ${state.auth.accessToken}` }
    });

    if (!metaRes.ok) {
      if (metaRes.status === 403) {
        showToast("Google Sheets 403: Verify Google Sheet share permissions.", "error");
        return;
      }
      throw new Error(`Sheets API Error (${metaRes.status})`);
    }

    const meta = await metaRes.json();
    const sheetProperties = meta.sheets?.map(s => s.properties) || [];

    const portfolioSheet = sheetProperties.find(p => p.title.toLowerCase().includes("portfolio"))
      || sheetProperties.find(p => String(p.sheetId) === "1201843379")
      || sheetProperties[0];

    if (portfolioSheet) {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(portfolioSheet.title)}!A1:Z200?valueRenderOption=UNFORMATTED_VALUE`;
      const res = await fetch(url, { headers: { Authorization: `Bearer ${state.auth.accessToken}` } });
      if (res.ok) {
        const data = await res.json();
        if (data.values && data.values.length > 1) {
          parsePortfolioSheetRows(data.values);
        }
      }
    }

    const banksSheet = sheetProperties.find(p => p.title.toLowerCase().includes("bank"));
    if (banksSheet) {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(banksSheet.title)}!A1:Z100?valueRenderOption=UNFORMATTED_VALUE`;
      const res = await fetch(url, { headers: { Authorization: `Bearer ${state.auth.accessToken}` } });
      if (res.ok) {
        const data = await res.json();
        if (data.values && data.values.length > 1) {
          parseBanksSheetRows(data.values);
        }
      }
    }

    showToast("Synchronized live data from Google Sheet!", "success");
    renderUI();
  } catch (err) {
    console.warn("Google Sheet sync notice:", err);
  }
}

function parsePortfolioSheetRows(rows) {
  if (!rows || rows.length < 2) return;
  const header = rows[0].map(h => String(h).trim().toLowerCase());
  const profileCol = header.findIndex(h => h.includes("profile"));
  const entityCol = header.findIndex(h => h.includes("entity") || h.includes("member") || h.includes("holder"));
  const invCol = header.findIndex(h => h.includes("investment") || h.includes("asset"));
  const catCol = header.findIndex(h => h.includes("category") || h.includes("class"));
  const val24Col = header.findIndex(h => h.includes("2024"));
  const val25Col = header.findIndex(h => h.includes("2025"));
  const val26Col = header.findIndex(h => h.includes("2026"));
  const notesCol = header.findIndex(h => h.includes("notes") || h.includes("broker"));

  const parsed = [];
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r || r.length === 0) continue;
    const invName = invCol >= 0 ? String(r[invCol] || "").trim() : "";
    if (!invName) continue;

    const rowProfile = profileCol >= 0 ? String(r[profileCol] || "").trim() : "";
    if (rowProfile && rowProfile.toLowerCase() !== state.currentProfile.toLowerCase()) {
      continue;
    }

    const holder = entityCol >= 0 ? String(r[entityCol] || state.entities[0]).trim() : state.entities[0];
    const category = catCol >= 0 ? String(r[catCol] || "Indian Equity").trim() : "Indian Equity";
    const notes = notesCol >= 0 ? String(r[notesCol] || "").trim() : "";

    const values = {
      "2024": val24Col >= 0 ? (parseFloat(r[val24Col]) || 0) : 0,
      "2025": val25Col >= 0 ? (parseFloat(r[val25Col]) || 0) : 0,
      "2026": val26Col >= 0 ? (parseFloat(r[val26Col]) || 0) : 0,
    };

    parsed.push({
      id: "sh_" + i,
      name: invName,
      category,
      holder,
      notes,
      values
    });
  }

  if (parsed.length > 0) {
    state.holdings = parsed;
    localStorage.setItem(`ak_holdings_${state.currentProfile}`, JSON.stringify(state.holdings));
  }
}

function parseBanksSheetRows(rows) {
  if (!rows || rows.length < 2) return;
  const header = rows[0].map(h => String(h).trim().toLowerCase());
  const profileCol = header.findIndex(h => h.includes("profile"));
  const bankCol = header.findIndex(h => h.includes("bank"));
  const holderCol = header.findIndex(h => h.includes("holder") || h.includes("entity"));
  const savCol = header.findIndex(h => h.includes("savings"));
  const fdCol = header.findIndex(h => h.includes("fd") || h.includes("deposit"));

  const parsedBanks = [];
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r || r.length === 0) continue;
    const bankName = bankCol >= 0 ? String(r[bankCol] || "").trim() : "";
    if (!bankName) continue;

    const rowProfile = profileCol >= 0 ? String(r[profileCol] || "").trim() : "";
    if (rowProfile && rowProfile.toLowerCase() !== state.currentProfile.toLowerCase()) {
      continue;
    }

    const holder = holderCol >= 0 ? String(r[holderCol] || state.entities[0]).trim() : state.entities[0];
    const savings = savCol >= 0 ? (parseFloat(r[savCol]) || 0) : 0;
    const fd = fdCol >= 0 ? (parseFloat(r[fdCol]) || 0) : 0;

    parsedBanks.push({
      bank: bankName,
      holder,
      savings,
      fd
    });
  }

  if (parsedBanks.length > 0) {
    state.banks = parsedBanks;
    localStorage.setItem(`ak_banks_${state.currentProfile}`, JSON.stringify(state.banks));
  }
}

async function syncBanksToGoogleSheet(showAlert = true) {
  if (!state.auth.isLoggedIn || !state.auth.accessToken) {
    if (showAlert) showToast("Sign in with Google first to sync with your private sheet.", "info");
    return;
  }
  showToast("Updating Google Sheet...", "info");
}


// ==========================================
// 12. Event Listeners & Startup Initializer
// ==========================================
function setupEventListeners() {
  // Navigation Tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");

      btn.classList.add("active");
      const tabId = btn.getAttribute("data-tab");
      const target = document.getElementById(`tab-${tabId}`);
      if (target) target.style.display = "block";
      state.activeTab = tabId;

      if (tabId === "overview") renderMinimalOverview();
      else if (tabId === "multiyear") renderMultiYearMatrix();
      else if (tabId === "banks") renderBanksSection();
    });
  });

  // Active Profile Pill in Header
  const activeProfPill = document.getElementById("active-profile-pill");
  if (activeProfPill) activeProfPill.addEventListener("click", openProfileModal);

  // Year Select Dropdown (Minimalist Tab 1)
  const yrSelect = document.getElementById("overview-year-select");
  if (yrSelect) {
    yrSelect.addEventListener("change", (e) => {
      state.selectedYear = e.target.value;
      renderMinimalOverview();
    });
  }

  // Entity Select Dropdown
  const entSelect1 = document.getElementById("overview-entity-select");
  if (entSelect1) {
    entSelect1.addEventListener("change", (e) => {
      state.selectedEntity = e.target.value;
      const entSelect2 = document.getElementById("multiyear-entity-select");
      if (entSelect2) entSelect2.value = e.target.value;
      renderUI();
    });
  }

  const entSelect2 = document.getElementById("multiyear-entity-select");
  if (entSelect2) {
    entSelect2.addEventListener("change", (e) => {
      state.selectedEntity = e.target.value;
      if (entSelect1) entSelect1.value = e.target.value;
      renderUI();
    });
  }

  // Unit Selector
  document.querySelectorAll(".unit-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".unit-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeUnit = btn.getAttribute("data-unit");
      renderUI();
    });
  });

  // Holding Modal Form Submit
  const holdingForm = document.getElementById("holding-form");
  if (holdingForm) holdingForm.addEventListener("submit", saveHolding);

  const closeHoldingModal = document.getElementById("close-holding-modal");
  if (closeHoldingModal) closeHoldingModal.addEventListener("click", () => closeModal("holding-modal"));

  const holdingEntitySel = document.getElementById("holding-entity-select");
  const customEntityGrp = document.getElementById("holding-custom-entity-group");
  const customEntityInp = document.getElementById("holding-custom-entity");
  if (holdingEntitySel) {
    holdingEntitySel.addEventListener("change", (e) => {
      if (e.target.value === "CUSTOM") {
        if (customEntityGrp) customEntityGrp.style.display = "block";
        if (customEntityInp) customEntityInp.focus();
      } else {
        if (customEntityGrp) customEntityGrp.style.display = "none";
      }
    });
  }

  // Bank Form Submit
  const bankForm = document.getElementById("bank-form");
  if (bankForm) bankForm.addEventListener("submit", saveBankAccount);

  const closeBankModal = document.getElementById("close-bank-modal");
  if (closeBankModal) closeBankModal.addEventListener("click", () => closeModal("bank-modal"));

  const bankSavInp = document.getElementById("bank-savings-input");
  const bankFdInp = document.getElementById("bank-fd-input");
  if (bankSavInp) bankSavInp.addEventListener("input", updateBankModalLivePreview);
  if (bankFdInp) bankFdInp.addEventListener("input", updateBankModalLivePreview);

  const bankDropdown = document.getElementById("bank-select-dropdown");
  const customBankGroup = document.getElementById("custom-bank-group");
  const customBankInput = document.getElementById("bank-name-input");

  if (bankDropdown) {
    bankDropdown.addEventListener("change", (e) => {
      const selected = e.target.value;
      if (selected === "CUSTOM") {
        if (customBankGroup) customBankGroup.style.display = "block";
        if (customBankInput) customBankInput.focus();
      } else {
        if (customBankGroup) customBankGroup.style.display = "none";
        if (selected) {
          const existing = state.banks.find(b => b.bank.toLowerCase() === selected.toLowerCase());
          if (existing) {
            if (bankSavInp) bankSavInp.value = existing.savings;
            if (bankFdInp) bankFdInp.value = existing.fd;
            showToast(`Loaded ${existing.bank} records. Adjust values below.`, "info");
          } else {
            if (bankSavInp) bankSavInp.value = "";
            if (bankFdInp) bankFdInp.value = "";
          }
        }
      }
      updateBankModalLivePreview();
    });
  }

  document.querySelectorAll(".bank-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const name = chip.getAttribute("data-bank");
      if (bankDropdown) {
        let found = false;
        for (let i = 0; i < bankDropdown.options.length; i++) {
          if (bankDropdown.options[i].value.toLowerCase() === name.toLowerCase()) {
            bankDropdown.selectedIndex = i;
            found = true;
            break;
          }
        }
        if (!found) {
          bankDropdown.value = "CUSTOM";
          if (customBankGroup) customBankGroup.style.display = "block";
          if (customBankInput) customBankInput.value = name;
        }
        bankDropdown.dispatchEvent(new Event("change"));
      }
    });
  });

  // Settings Modal
  const settingsBtn = document.getElementById("settings-btn");
  if (settingsBtn) settingsBtn.addEventListener("click", () => openModal("settings-modal"));

  const closeSettingsBtn = document.getElementById("close-settings-modal");
  if (closeSettingsBtn) closeSettingsBtn.addEventListener("click", () => closeModal("settings-modal"));

  const settingsForm = document.getElementById("settings-form");
  if (settingsForm) {
    settingsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const clientId = document.getElementById("setting-client-id").value.trim();
      const sheetId = document.getElementById("setting-sheet-id").value.trim();
      const allowedEmail = document.getElementById("setting-allowed-email").value.trim();

      state.config.clientId = clientId;
      state.config.sheetId = sheetId;
      state.config.allowedEmail = allowedEmail;

      localStorage.setItem("ak_client_id", clientId);
      localStorage.setItem("ak_sheet_id", sheetId);
      localStorage.setItem("ak_allowed_email", allowedEmail);

      initGoogleOAuth();
      closeModal("settings-modal");
      showToast("Settings saved securely in local browser storage!", "success");
    });
  }

  const authBtn = document.getElementById("auth-btn");
  if (authBtn) authBtn.addEventListener("click", handleLoginClick);
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("active");
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

async function fetchLiveExchangeRate() {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    if (res.ok) {
      const data = await res.json();
      if (data?.rates?.INR) {
        state.usdInrRate = Number(data.rates.INR.toFixed(2));
        renderUI();
      }
    }
  } catch (e) {
    console.log("Using fallback USD/INR rate: ₹86.50");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  restoreSessionIfValid();
  setupEventListeners();
  loadProfileData(state.currentProfile);
  fetchLiveExchangeRate();
  updateAuthUI();

  if (state.config.clientId) initGoogleOAuth();
  if (state.auth.isLoggedIn) {
    fetchGoogleSheetData();
  }
});
