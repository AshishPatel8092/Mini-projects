// ==========================================================================
// 15 Converter Categories & SVG Icon Definitions
// ==========================================================================
const SVG_ICONS = {
  coins: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>`,
  ruler: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  scale: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
  area: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>`,
  clock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  dollar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  database: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
  calendar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  tag: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><circle cx="7" cy="7" r=".5" fill="currentColor"/></svg>`,
  box: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  binary: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="6" x="14" y="14" rx="2"/><rect width="4" height="6" x="6" y="4" rx="2"/><path d="M6 20h4"/><path d="M14 10h4"/><path d="M6 14h2v6"/><path d="M14 4h2v6"/></svg>`,
  gauge: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`,
  thermometer: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>`,
  activity: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  receipt: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>`,
  chevronDown: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  chevronUp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  swap: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>`,
};

const CATEGORIES = [
  {
    id: "currency",
    name: "Currency",
    icon: "coins",
    desc: "Convert global currencies with real-time rates.",
  },
  {
    id: "length",
    name: "Length",
    icon: "ruler",
    desc: "Convert metric, imperial, and nautical units.",
  },
  {
    id: "mass",
    name: "Mass",
    icon: "scale",
    desc: "Convert kilograms, pounds, ounces, grams, tons.",
  },
  {
    id: "area",
    name: "Area",
    icon: "area",
    desc: "Calculate sq meters, acres, hectares, sq ft.",
  },
  {
    id: "time",
    name: "Time",
    icon: "clock",
    desc: "Convert seconds, hours, days, weeks, years.",
  },
  {
    id: "finance",
    name: "Finance",
    icon: "dollar",
    desc: "Calculate Loan EMI, Interest, Tips, Margins.",
  },
  {
    id: "data",
    name: "Data Storage",
    icon: "database",
    desc: "Convert bytes, KB, MB, GB, TB, and PB.",
  },
  {
    id: "date",
    name: "Date Calculator",
    icon: "calendar",
    desc: "Calculate date duration and add/subtract days.",
  },
  {
    id: "discount",
    name: "Discount",
    icon: "tag",
    desc: "Calculate sale price, savings, and discount %.",
  },
  {
    id: "volume",
    name: "Volume",
    icon: "box",
    desc: "Convert liters, milliliters, gallons, cubic meters.",
  },
  {
    id: "numbersystem",
    name: "Number System",
    icon: "binary",
    desc: "Convert Binary, Octal, Decimal, and Hex.",
  },
  {
    id: "speed",
    name: "Speed",
    icon: "gauge",
    desc: "Convert km/h, mph, m/s, knots, ft/s.",
  },
  {
    id: "temperature",
    name: "Temperature",
    icon: "thermometer",
    desc: "Convert Celsius, Fahrenheit, Kelvin, Rankine.",
  },
  {
    id: "bmi",
    name: "BMI Calculator",
    icon: "activity",
    desc: "Calculate Body Mass Index & health category.",
  },
  {
    id: "gst",
    name: "GST / VAT",
    icon: "receipt",
    desc: "Calculate Exclusive and Inclusive tax amounts.",
  },
];

// Unit Definitions for Standard Generic Converters
const UNITS = {
  currency: {
    base: "USD",
    items: [
      { id: "USD", name: "USD - US Dollar", rate: 1 },
      { id: "EUR", name: "EUR - Euro", rate: 0.92 },
      { id: "GBP", name: "GBP - British Pound", rate: 0.79 },
      { id: "INR", name: "INR - Indian Rupee", rate: 83.35 },
      { id: "JPY", name: "JPY - Japanese Yen", rate: 156.4 },
      { id: "CAD", name: "CAD - Canadian Dollar", rate: 1.37 },
      { id: "AUD", name: "AUD - Australian Dollar", rate: 1.51 },
      { id: "CHF", name: "CHF - Swiss Franc", rate: 0.91 },
      { id: "CNY", name: "CNY - Chinese Yuan", rate: 7.23 },
    ],
  },
  length: {
    base: "m",
    items: [
      { id: "m", name: "Meters (m)", rate: 1 },
      { id: "km", name: "Kilometers (km)", rate: 1000 },
      { id: "cm", name: "Centimeters (cm)", rate: 0.01 },
      { id: "mm", name: "Millimeters (mm)", rate: 0.001 },
      { id: "in", name: "Inches (in)", rate: 0.0254 },
      { id: "ft", name: "Feet (ft)", rate: 0.3048 },
      { id: "yd", name: "Yards (yd)", rate: 0.9144 },
      { id: "mi", name: "Miles (mi)", rate: 1609.344 },
      { id: "nmi", name: "Nautical Miles", rate: 1852 },
    ],
  },
  mass: {
    base: "kg",
    items: [
      { id: "kg", name: "Kilograms (kg)", rate: 1 },
      { id: "g", name: "Grams (g)", rate: 0.001 },
      { id: "mg", name: "Milligrams (mg)", rate: 0.000001 },
      { id: "lb", name: "Pounds (lb)", rate: 0.45359237 },
      { id: "oz", name: "Ounces (oz)", rate: 0.0283495 },
      { id: "t", name: "Metric Tons (t)", rate: 1000 },
    ],
  },
  area: {
    base: "sqm",
    items: [
      { id: "sqm", name: "Square Meters (m²)", rate: 1 },
      { id: "sqkm", name: "Square Kilometers (km²)", rate: 1000000 },
      { id: "sqft", name: "Square Feet (ft²)", rate: 0.092903 },
      { id: "acre", name: "Acres (ac)", rate: 4046.86 },
      { id: "ha", name: "Hectares (ha)", rate: 10000 },
    ],
  },
  time: {
    base: "s",
    items: [
      { id: "s", name: "Seconds (s)", rate: 1 },
      { id: "min", name: "Minutes (min)", rate: 60 },
      { id: "h", name: "Hours (h)", rate: 3600 },
      { id: "d", name: "Days (d)", rate: 86400 },
      { id: "wk", name: "Weeks (wk)", rate: 604800 },
      { id: "mo", name: "Months (mo)", rate: 2629746 },
      { id: "yr", name: "Years (yr)", rate: 31556952 },
    ],
  },
  data: {
    base: "B",
    items: [
      { id: "B", name: "Bytes (B)", rate: 1 },
      { id: "KB", name: "Kilobytes (KB)", rate: 1024 },
      { id: "MB", name: "Megabytes (MB)", rate: 1048576 },
      { id: "GB", name: "Gigabytes (GB)", rate: 1073741824 },
      { id: "TB", name: "Terabytes (TB)", rate: 1099511627776 },
      { id: "PB", name: "Petabytes (PB)", rate: 1125899906842624 },
    ],
  },
  volume: {
    base: "l",
    items: [
      { id: "l", name: "Liters (L)", rate: 1 },
      { id: "ml", name: "Milliliters (mL)", rate: 0.001 },
      { id: "cum", name: "Cubic Meters (m³)", rate: 1000 },
      { id: "gal", name: "US Gallons (gal)", rate: 3.78541 },
      { id: "floz", name: "Fluid Ounces (fl oz)", rate: 0.0295735 },
      { id: "cup", name: "Cups (cup)", rate: 0.24 },
    ],
  },
  speed: {
    base: "ms",
    items: [
      { id: "ms", name: "Meters / sec (m/s)", rate: 1 },
      { id: "kmh", name: "Kilometers / hr (km/h)", rate: 0.277778 },
      { id: "mph", name: "Miles / hr (mph)", rate: 0.44704 },
      { id: "kn", name: "Knots (kn)", rate: 0.514444 },
      { id: "fts", name: "Feet / sec (ft/s)", rate: 0.3048 },
    ],
  },
};

let activeCategoryId = "currency";

// Responsive grid column counter
function getColumnCount() {
  const w = window.innerWidth;
  if (w < 640) return 1;
  if (w < 960) return 2;
  return 3;
}

// Render the grid with in-row expansion
function renderApp() {
  const grid = document.getElementById("gridContainer");
  if (!grid) return;
  grid.innerHTML = "";

  const cols = getColumnCount();
  const activeIndex = CATEGORIES.findIndex((c) => c.id === activeCategoryId);
  let insertAfterIndex = -1;

  if (activeIndex !== -1) {
    const rowNumber = Math.floor(activeIndex / cols);
    insertAfterIndex = Math.min(
      (rowNumber + 1) * cols - 1,
      CATEGORIES.length - 1,
    );
  }

  CATEGORIES.forEach((cat, idx) => {
    const isActive = cat.id === activeCategoryId;

    // Create Category Card
    const card = document.createElement("button");
    card.type = "button";
    card.className = `category-card ${isActive ? "is-active" : ""}`;
    card.onclick = () => {
      activeCategoryId = activeCategoryId === cat.id ? null : cat.id;
      renderApp();
    };

    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon">${SVG_ICONS[cat.icon] || SVG_ICONS.coins}</div>
        <div class="card-chevron">${isActive ? SVG_ICONS.chevronUp : SVG_ICONS.chevronDown}</div>
      </div>
      <div class="card-bottom">
        <div class="card-title">${cat.name}</div>
        <div class="card-desc">${cat.desc}</div>
      </div>
    `;
    grid.appendChild(card);

    // Insert Expanded Panel Immediately Below Row
    if (idx === insertAfterIndex && activeCategoryId) {
      const activeCat = CATEGORIES.find((c) => c.id === activeCategoryId);
      const panelWrapper = document.createElement("div");
      panelWrapper.className = "expanded-panel-container";
      panelWrapper.innerHTML = `
        <div class="expanded-panel">
          <div class="panel-header">
            <div class="panel-title-group">
              <div class="card-icon">${SVG_ICONS[activeCat.icon] || SVG_ICONS.coins}</div>
              <div>
                <h2>${activeCat.name} Converter</h2>
                <p>${activeCat.desc}</p>
              </div>
            </div>
            <button type="button" onclick="closeExpandedPanel()" class="close-btn" aria-label="Close panel">
              ${SVG_ICONS.close}
            </button>
          </div>
          <div id="panelContent">${generateConverterMarkup(activeCat.id)}</div>
        </div>
      `;
      grid.appendChild(panelWrapper);
    }
  });
}

function closeExpandedPanel() {
  activeCategoryId = null;
  renderApp();
}

// Generate the specific calculation UI for each of the 15 converters
function generateConverterMarkup(id) {
  // Generic Unit Converters
  if (UNITS[id]) {
    const data = UNITS[id];
    const u1 = data.items[0].id;
    const u2 = data.items[1] ? data.items[1].id : data.items[0].id;
    return `
      <div class="converter-row">
        <div class="input-card">
          <label class="input-label">From</label>
          <div class="input-group">
            <input type="number" id="genVal1" value="10" oninput="calculateGeneric('${id}')" class="number-input" />
            <select id="genUnit1" onchange="calculateGeneric('${id}')" class="unit-select">
              ${data.items.map((u) => `<option value="${u.id}" ${u.id === u1 ? "selected" : ""}>${u.name}</option>`).join("")}
            </select>
          </div>
        </div>
        <button type="button" onclick="swapGeneric('${id}')" class="swap-btn" title="Swap Units">${SVG_ICONS.swap}</button>
        <div class="input-card">
          <label class="input-label">To</label>
          <div class="input-group">
            <input type="number" id="genVal2" readonly class="number-input" style="color: var(--accent-color);" />
            <select id="genUnit2" onchange="calculateGeneric('${id}')" class="unit-select">
              ${data.items.map((u) => `<option value="${u.id}" ${u.id === u2 ? "selected" : ""}>${u.name}</option>`).join("")}
            </select>
          </div>
        </div>
      </div>
      <div id="genericStats" class="stats-grid"></div>
    `;
  }

  // Temperature
  if (id === "temperature") {
    return `
      <div class="converter-row">
        <div class="input-card">
          <label class="input-label">Celsius (°C)</label>
          <input type="number" id="tempC" value="25" oninput="calcTemp('C')" class="number-input" />
        </div>
        <div style="text-align: center; color: var(--text-secondary); font-weight: bold;">=</div>
        <div class="input-card">
          <label class="input-label">Fahrenheit (°F)</label>
          <input type="number" id="tempF" value="77" oninput="calcTemp('F')" class="number-input" style="color: var(--accent-color);" />
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-label">Kelvin</div><div id="tempK" class="stat-value">298.15 K</div></div>
        <div class="stat-box"><div class="stat-label">Rankine</div><div id="tempR" class="stat-value">536.67 °R</div></div>
      </div>
    `;
  }

  // Number System
  if (id === "numbersystem") {
    return `
      <div class="input-card" style="margin-bottom: 16px;">
        <label class="input-label">Enter Number & Select Base</label>
        <div class="input-group">
          <input type="text" id="numInput" value="255" oninput="calcNumberSystem()" class="number-input" />
          <select id="numBase" onchange="calcNumberSystem()" class="unit-select">
            <option value="10">Decimal (Base 10)</option>
            <option value="2">Binary (Base 2)</option>
            <option value="8">Octal (Base 8)</option>
            <option value="16">Hexadecimal (Base 16)</option>
          </select>
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-label">Decimal</div><div id="resDec" class="stat-value highlight">255</div></div>
        <div class="stat-box"><div class="stat-label">Binary</div><div id="resBin" class="stat-value">11111111</div></div>
        <div class="stat-box"><div class="stat-label">Hexadecimal</div><div id="resHex" class="stat-value">FF</div></div>
        <div class="stat-box"><div class="stat-label">Octal</div><div id="resOct" class="stat-value">377</div></div>
      </div>
    `;
  }

  // Date Calculator
  if (id === "date") {
    const today = new Date().toISOString().split("T")[0];
    const nextMonth = new Date(Date.now() + 30 * 86400000)
      .toISOString()
      .split("T")[0];
    return `
      <div class="converter-row">
        <div class="input-card">
          <label class="input-label">Start Date</label>
          <input type="date" id="dateStart" value="${today}" onchange="calcDateDiff()" class="date-input" />
        </div>
        <div style="text-align:center; color: var(--text-secondary); font-weight:bold;">to</div>
        <div class="input-card">
          <label class="input-label">End Date</label>
          <input type="date" id="dateEnd" value="${nextMonth}" onchange="calcDateDiff()" class="date-input" />
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-label">Total Days</div><div id="dateDays" class="stat-value highlight">30</div></div>
        <div class="stat-box"><div class="stat-label">Weeks</div><div id="dateWeeks" class="stat-value">4.3</div></div>
        <div class="stat-box"><div class="stat-label">Months</div><div id="dateMonths" class="stat-value">1.0</div></div>
      </div>
    `;
  }

  // Discount
  if (id === "discount") {
    return `
      <div class="converter-row">
        <div class="input-card">
          <label class="input-label">Original Price ($)</label>
          <input type="number" id="discPrice" value="100" oninput="calcDiscount()" class="number-input" />
        </div>
        <div></div>
        <div class="input-card">
          <label class="input-label">Discount (%)</label>
          <input type="number" id="discRate" value="20" oninput="calcDiscount()" class="number-input" />
        </div>
      </div>
      <div class="chips-row">
        <button type="button" class="chip-btn" onclick="setDiscountRate(10)">10%</button>
        <button type="button" class="chip-btn" onclick="setDiscountRate(20)">20%</button>
        <button type="button" class="chip-btn" onclick="setDiscountRate(25)">25%</button>
        <button type="button" class="chip-btn" onclick="setDiscountRate(50)">50%</button>
        <button type="button" class="chip-btn" onclick="setDiscountRate(70)">70%</button>
      </div>
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-label">Final Price</div><div id="discFinal" class="stat-value highlight">$80.00</div></div>
        <div class="stat-box"><div class="stat-label">You Save</div><div id="discSave" class="stat-value" style="color:#10b981;">$20.00</div></div>
      </div>
    `;
  }

  // BMI Calculator
  if (id === "bmi") {
    return `
      <div class="converter-row">
        <div class="input-card">
          <label class="input-label">Height (cm)</label>
          <input type="number" id="bmiHeight" value="175" oninput="calcBMI()" class="number-input" />
        </div>
        <div></div>
        <div class="input-card">
          <label class="input-label">Weight (kg)</label>
          <input type="number" id="bmiWeight" value="70" oninput="calcBMI()" class="number-input" />
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-label">Your BMI</div><div id="bmiVal" class="stat-value highlight">22.9</div></div>
        <div class="stat-box"><div class="stat-label">Status</div><div id="bmiStatus" class="stat-value" style="color:#10b981;">Normal Weight</div></div>
      </div>
    `;
  }

  // GST / VAT
  if (id === "gst") {
    return `
      <div class="converter-row">
        <div class="input-card">
          <label class="input-label">Amount (₹)</label>
          <input type="number" id="gstAmount" value="1000" oninput="calcGST()" class="number-input" />
        </div>
        <div></div>
        <div class="input-card">
          <label class="input-label">GST Rate (%)</label>
          <input type="number" id="gstRate" value="18" oninput="calcGST()" class="number-input" />
        </div>
      </div>
      <div class="chips-row">
        <button type="button" class="chip-btn" onclick="setGSTRate(5)">5% GST</button>
        <button type="button" class="chip-btn" onclick="setGSTRate(12)">12% GST</button>
        <button type="button" class="chip-btn active" onclick="setGSTRate(18)">18% GST</button>
        <button type="button" class="chip-btn" onclick="setGSTRate(28)">28% GST</button>
      </div>
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-label">Net Amount</div><div id="gstNet" class="stat-value">₹1000.00</div></div>
        <div class="stat-box"><div class="stat-label">GST Tax</div><div id="gstTax" class="stat-value" style="color:#10b981;">₹180.00</div></div>
        <div class="stat-box"><div class="stat-label">Total Amount</div><div id="gstTotal" class="stat-value highlight">₹1180.00</div></div>
      </div>
    `;
  }

  // Finance / EMI
  if (id === "finance") {
    return `
      <div class="converter-row">
        <div class="input-card">
          <label class="input-label">Loan Amount ($)</label>
          <input type="number" id="finPrincipal" value="50000" oninput="calcFinance()" class="number-input" />
        </div>
        <div class="input-card">
          <label class="input-label">Annual Rate (%)</label>
          <input type="number" id="finRate" value="8.5" oninput="calcFinance()" class="number-input" />
        </div>
        <div class="input-card">
          <label class="input-label">Tenure (Years)</label>
          <input type="number" id="finYears" value="5" oninput="calcFinance()" class="number-input" />
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-label">Monthly EMI</div><div id="finEMI" class="stat-value highlight">$1,025.83</div></div>
        <div class="stat-box"><div class="stat-label">Total Interest</div><div id="finInterest" class="stat-value">$11,550.08</div></div>
        <div class="stat-box"><div class="stat-label">Total Payment</div><div id="finTotal" class="stat-value">$61,550.08</div></div>
      </div>
    `;
  }

  return `<p style="padding:20px; color:var(--text-secondary); text-align:center;">Converter Ready.</p>`;
}

// ==========================================================================
// Calculation Helpers
// ==========================================================================
function calculateGeneric(catId) {
  const val1El = document.getElementById("genVal1");
  const u1El = document.getElementById("genUnit1");
  const val2El = document.getElementById("genVal2");
  const u2El = document.getElementById("genUnit2");
  const statsEl = document.getElementById("genericStats");
  if (!val1El || !u1El || !val2El || !u2El) return;

  const data = UNITS[catId];
  const v1 = parseFloat(val1El.value) || 0;
  const u1 = data.items.find((i) => i.id === u1El.value);
  const u2 = data.items.find((i) => i.id === u2El.value);

  // Base Conversion
  const baseValue = v1 * u1.rate;
  const res = baseValue / u2.rate;
  val2El.value = (
    Number.isInteger(res) ? res : parseFloat(res.toFixed(4))
  ).toString();

  // Populate comparison stats
  if (statsEl) {
    statsEl.innerHTML = data.items
      .map((u) => {
        const equiv = baseValue / u.rate;
        const formatted =
          equiv >= 1000000 || (equiv < 0.001 && equiv > 0)
            ? equiv.toExponential(3)
            : Number.isInteger(equiv)
              ? equiv
              : equiv.toFixed(2);
        return `
        <div class="stat-box">
          <div class="stat-label">${u.name}</div>
          <div class="stat-value ${u.id === u2.id ? "highlight" : ""}">${formatted}</div>
        </div>
      `;
      })
      .join("");
  }
}

function swapGeneric(catId) {
  const u1 = document.getElementById("genUnit1");
  const u2 = document.getElementById("genUnit2");
  if (!u1 || !u2) return;
  const temp = u1.value;
  u1.value = u2.value;
  u2.value = temp;
  calculateGeneric(catId);
}

function calcTemp(source) {
  const c = document.getElementById("tempC");
  const f = document.getElementById("tempF");
  const k = document.getElementById("tempK");
  const r = document.getElementById("tempR");
  let cVal = 0;

  if (source === "C") {
    cVal = parseFloat(c.value) || 0;
    f.value = ((cVal * 9) / 5 + 32).toFixed(2);
  } else {
    const fVal = parseFloat(f.value) || 0;
    cVal = ((fVal - 32) * 5) / 9;
    c.value = cVal.toFixed(2);
  }
  if (k) k.innerText = `${(cVal + 273.15).toFixed(2)} K`;
  if (r) r.innerText = `${((cVal + 273.15) * 1.8).toFixed(2)} °R`;
}

function calcNumberSystem() {
  const input = document.getElementById("numInput").value.trim();
  const base = parseInt(document.getElementById("numBase").value);
  const dec = parseInt(input, base);

  if (isNaN(dec)) {
    document.getElementById("resDec").innerText = "--";
    document.getElementById("resBin").innerText = "--";
    document.getElementById("resHex").innerText = "--";
    document.getElementById("resOct").innerText = "--";
    return;
  }
  document.getElementById("resDec").innerText = dec.toString(10);
  document.getElementById("resBin").innerText = dec.toString(2);
  document.getElementById("resHex").innerText = dec.toString(16).toUpperCase();
  document.getElementById("resOct").innerText = dec.toString(8);
}

function calcDateDiff() {
  const s = new Date(document.getElementById("dateStart").value);
  const e = new Date(document.getElementById("dateEnd").value);
  const diffDays = Math.ceil(Math.abs(e - s) / (1000 * 60 * 60 * 24));
  document.getElementById("dateDays").innerText = diffDays || 0;
  document.getElementById("dateWeeks").innerText = (
    (diffDays || 0) / 7
  ).toFixed(1);
  document.getElementById("dateMonths").innerText = (
    (diffDays || 0) / 30.4
  ).toFixed(1);
}

function calcDiscount() {
  const p = parseFloat(document.getElementById("discPrice").value) || 0;
  const r = parseFloat(document.getElementById("discRate").value) || 0;
  const save = (p * r) / 100;
  const finalP = Math.max(0, p - save);
  document.getElementById("discFinal").innerText = `$${finalP.toFixed(2)}`;
  document.getElementById("discSave").innerText = `$${save.toFixed(2)}`;
}

function setDiscountRate(rate) {
  document.getElementById("discRate").value = rate;
  calcDiscount();
}

function calcBMI() {
  const h = (parseFloat(document.getElementById("bmiHeight").value) || 0) / 100;
  const w = parseFloat(document.getElementById("bmiWeight").value) || 0;
  if (h <= 0) return;
  const bmi = w / (h * h);
  document.getElementById("bmiVal").innerText = bmi.toFixed(1);

  let status = "Normal Weight";
  let color = "#10b981";
  if (bmi < 18.5) {
    status = "Underweight";
    color = "#38bdf8";
  } else if (bmi >= 25 && bmi < 30) {
    status = "Overweight";
    color = "#f59e0b";
  } else if (bmi >= 30) {
    status = "Obese";
    color = "#f43f5e";
  }

  const statusEl = document.getElementById("bmiStatus");
  statusEl.innerText = status;
  statusEl.style.color = color;
}

function calcGST() {
  const amt = parseFloat(document.getElementById("gstAmount").value) || 0;
  const rate = parseFloat(document.getElementById("gstRate").value) || 0;
  const tax = (amt * rate) / 100;
  document.getElementById("gstNet").innerText = `₹${amt.toFixed(2)}`;
  document.getElementById("gstTax").innerText = `₹${tax.toFixed(2)}`;
  document.getElementById("gstTotal").innerText = `₹${(amt + tax).toFixed(2)}`;
}

function setGSTRate(rate) {
  document.getElementById("gstRate").value = rate;
  calcGST();
}

function calcFinance() {
  const P = parseFloat(document.getElementById("finPrincipal").value) || 0;
  const annualR = parseFloat(document.getElementById("finRate").value) || 0;
  const years = parseFloat(document.getElementById("finYears").value) || 0;

  const N = years * 12;
  const R = annualR / (12 * 100);

  if (P <= 0 || R <= 0 || N <= 0) return;

  const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  const total = emi * N;
  const interest = total - P;

  document.getElementById("finEMI").innerText =
    `$${emi.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("finInterest").innerText =
    `$${interest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("finTotal").innerText =
    `$${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Initial Bootstrapping & Window Resize Handling
window.addEventListener("resize", renderApp);
document.addEventListener("DOMContentLoaded", () => {
  renderApp();
  setTimeout(() => calculateGeneric("currency"), 50);

  // Theme Toggle Button
  const themeBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");

  themeBtn.onclick = () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "light");
      themeIcon.innerText = "🌙";
      themeLabel.innerText = "Dark Mode";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      themeIcon.innerText = "☀️";
      themeLabel.innerText = "Light Mode";
    }
  };
});
