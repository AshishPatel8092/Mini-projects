// 15 Categories Data
const CATEGORIES = [
  {
    id: "currency",
    name: "Currency",
    icon: "coins",
    desc: "Convert global currencies with rates.",
  },
  {
    id: "length",
    name: "Length",
    icon: "ruler",
    desc: "Convert metric, imperial, and nautical distance.",
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
    icon: "maximize-2",
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
    icon: "dollar-sign",
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
    desc: "Calculate date differences and days.",
  },
  {
    id: "discount",
    name: "Discount",
    icon: "tag",
    desc: "Calculate sale price, total savings, and discount.",
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
    desc: "Calculate Body Mass Index & health range.",
  },
  {
    id: "gst",
    name: "GST / VAT",
    icon: "receipt",
    desc: "Calculate Exclusive and Inclusive tax.",
  },
];

let activeCategoryId = "currency";

// Calculate current column count based on window width
function getColumnCount() {
  const w = window.innerWidth;
  if (w < 640) return 1;
  if (w < 900) return 2;
  return 3;
}

// Render Grid Cards and Inline Expanded Panel
function renderGrid() {
  const grid = document.getElementById("categoryGrid");
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

    // Category Card Button
    const cardBtn = document.createElement("button");
    cardBtn.type = "button";
    cardBtn.className = `card-btn ${isActive ? "active" : ""}`;

    cardBtn.onclick = () => {
      activeCategoryId = activeCategoryId === cat.id ? null : cat.id;
      renderGrid();
    };

    cardBtn.innerHTML = `
      <div class="card-header">
        <div class="card-icon-box">
          <i data-lucide="${cat.icon}"></i>
        </div>
        <i data-lucide="${isActive ? "chevron-up" : "chevron-down"}"></i>
      </div>
      <div>
        <div class="card-title">${cat.name}</div>
        <div class="card-desc">${cat.desc}</div>
      </div>
    `;

    grid.appendChild(cardBtn);

    // Inline Row Expansion Panel
    if (idx === insertAfterIndex && activeCategoryId) {
      const activeCat = CATEGORIES.find((c) => c.id === activeCategoryId);
      const panelWrapper = document.createElement("div");
      panelWrapper.className = "expanded-panel-wrapper";
      panelWrapper.innerHTML = `
        <div class="expanded-panel">
          <div class="panel-header">
            <div class="panel-title-box">
              <div class="card-icon-box">
                <i data-lucide="${activeCat.icon}"></i>
              </div>
              <div>
                <h2>${activeCat.name} Converter</h2>
                <p>${activeCat.desc}</p>
              </div>
            </div>
            <button onclick="closePanel()" class="close-btn" type="button">
              <i data-lucide="x"></i>
            </button>
          </div>
          <div>${getConverterUI(activeCat.id)}</div>
        </div>
      `;
      grid.appendChild(panelWrapper);
    }
  });

  // Render Lucide Icons safely
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }
}

function closePanel() {
  activeCategoryId = null;
  renderGrid();
}

// Generate UI for selected converter
function getConverterUI(id) {
  if (id === "temperature") {
    return `
      <div class="converter-form-grid">
        <div class="input-box">
          <label class="input-label">Celsius (°C)</label>
          <input type="number" id="tempC" value="25" oninput="convertTemp('C')" class="custom-input" />
        </div>
        <div class="input-box">
          <label class="input-label">Fahrenheit (°F)</label>
          <input type="number" id="tempF" value="77" oninput="convertTemp('F')" class="custom-input" style="color: var(--accent-orange);" />
        </div>
      </div>
    `;
  }
  if (id === "gst") {
    return `
      <div class="converter-form-grid">
        <div class="input-box">
          <label class="input-label">Amount (₹)</label>
          <input type="number" id="gstAmt" value="1000" oninput="calcGST()" class="custom-input" />
        </div>
        <div class="input-box">
          <label class="input-label">GST Rate (%)</label>
          <input type="number" id="gstRate" value="18" oninput="calcGST()" class="custom-input" />
        </div>
      </div>
      <div class="result-card">
        <span class="input-label" style="margin: 0;">Total Amount with GST:</span>
        <span id="gstTotal" class="result-value">₹1180.00</span>
      </div>
    `;
  }
  if (id === "discount") {
    return `
      <div class="converter-form-grid">
        <div class="input-box">
          <label class="input-label">Original Price ($)</label>
          <input type="number" id="discPrice" value="100" oninput="calcDiscount()" class="custom-input" />
        </div>
        <div class="input-box">
          <label class="input-label">Discount (%)</label>
          <input type="number" id="discRate" value="20" oninput="calcDiscount()" class="custom-input" />
        </div>
      </div>
      <div class="result-card">
        <span class="input-label" style="margin: 0;">Final Price After Discount:</span>
        <span id="discResult" class="result-value">$80.00</span>
      </div>
    `;
  }
  return `
    <div style="text-align: center; color: var(--text-muted); padding: 24px;">
      Interactive converter module ready for <strong>${id}</strong>.
    </div>
  `;
}

// Logic Functions
function convertTemp(source) {
  const c = document.getElementById("tempC");
  const f = document.getElementById("tempF");
  if (source === "C") {
    const val = parseFloat(c.value) || 0;
    f.value = ((val * 9) / 5 + 32).toFixed(1);
  } else {
    const val = parseFloat(f.value) || 0;
    c.value = (((val - 32) * 5) / 9).toFixed(1);
  }
}

function calcGST() {
  const amt = parseFloat(document.getElementById("gstAmt").value) || 0;
  const rate = parseFloat(document.getElementById("gstRate").value) || 0;
  const total = amt + (amt * rate) / 100;
  document.getElementById("gstTotal").innerText = `₹${total.toFixed(2)}`;
}

function calcDiscount() {
  const price = parseFloat(document.getElementById("discPrice").value) || 0;
  const rate = parseFloat(document.getElementById("discRate").value) || 0;
  const finalPrice = Math.max(0, price - (price * rate) / 100);
  document.getElementById("discResult").innerText = `$${finalPrice.toFixed(2)}`;
}

// Event Listeners
window.addEventListener("resize", renderGrid);
document.addEventListener("DOMContentLoaded", () => {
  renderGrid();

  // Theme toggle button
  const themeBtn = document.getElementById("themeToggleBtn");
  const themeText = document.getElementById("themeBtnText");

  if (themeBtn) {
    themeBtn.onclick = () => {
      const isLight = document.documentElement.classList.toggle("light");
      themeText.innerText = isLight ? "Dark Mode" : "Light Mode";
    };
  }
});
