// Currency Converter
// This API base URL provides the latest exchange-rate data.
const API_BASE_URLS = [
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies",
  "https://latest.currency-api.pages.dev/v1/currencies", // Backup API URL
];

// Wait until all HTML elements have loaded before selecting them.
document.addEventListener("DOMContentLoaded", () => {
  // Select all currency dropdown menus.
  const dropdowns = document.querySelectorAll(".dropdown select");

  // Select the form, amount input, and message area from HTML.
  const form = document.querySelector("form");
  const amountInput = document.querySelector(".amount input");
  const fromCurr = document.querySelector(".from select");
  const toCurr = document.querySelector(".to select");
  const msg = document.querySelector(".msg");
  const button = form.querySelector("button");

  // Add every currency code from countryList to both dropdowns.
  for (const select of dropdowns) {
    // Clear existing options so currencies are not duplicated.
    select.innerHTML = "";

    for (const currCode of Object.keys(countryList)) {
      // Create one <option> element, such as <option value="USD">USD</option>.
      const option = document.createElement("option");
      option.value = currCode;
      option.innerText = currCode;

      // Set USD as the default "From" currency.
      if (select.name === "from" && currCode === "USD") {
        option.selected = true;
      }

      // Set INR as the default "To" currency.
      if (select.name === "to" && currCode === "INR") {
        option.selected = true;
      }

      // Put the new currency option inside the dropdown.
      select.append(option);
    }

    // Update the flag when the user chooses a new currency.
    select.addEventListener("change", (event) => {
      updateFlag(event.target);
    });

    // Display the correct default flag when the page first opens.
    updateFlag(select);
  }

  // This runs when the user clicks Convert or presses Enter in the form.
  form.addEventListener("submit", async (event) => {
    // Stop the form from refreshing the page.
    event.preventDefault();

    // Convert the input text to a number.
    let amount = Number.parseFloat(amountInput.value);

    // Use 1 if the input is empty, zero, negative, or not a valid number.
    if (!Number.isFinite(amount) || amount <= 0) {
      amount = 1;
      amountInput.value = "1";
    }

    // Convert USD to usd because the API uses lowercase currency keys.
    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();

    try {
      // Disable the button so it cannot be clicked repeatedly during the request.
      button.disabled = true;
      msg.innerText = "Getting latest exchange rate...";

      // Get the exchange rate from the API.
      const rate = await getExchangeRate(from, to);

      // Calculate the converted amount.
      const finalAmount = amount * rate;

      // Show a clean result. Example: 1 USD = 83.52 INR
      msg.innerText =
        `${amount} ${fromCurr.value} = ` +
        `${finalAmount.toLocaleString(undefined, {
          maximumFractionDigits: 4,
        })} ${toCurr.value}`;
    } catch (error) {
      // Show a helpful message if the network/API is unavailable.
      console.error("Currency conversion error:", error);
      msg.innerText = "Could not get the exchange rate. Please try again.";
    } finally {
      // Re-enable the Convert button whether the request succeeds or fails.
      button.disabled = false;
    }
  });

  // Changes the flag image next to a selected currency.
  function updateFlag(selectElement) {
    // Example: countryList["USD"] returns "US".
    const countryCode = countryList[selectElement.value];

    // Find the img inside the same dropdown container.
    const flagImage = selectElement.parentElement.querySelector("img");

    // Replace its image source with the correct flag.
    if (countryCode && flagImage) {
      flagImage.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    }
  }

  // Fetches exchange rates. It tries a backup URL if the first API is down.
  async function getExchangeRate(from, to) {
    let lastError;

    for (const baseUrl of API_BASE_URLS) {
      try {
        // Example request:
        // .../currencies/usd.json
        const response = await fetch(`${baseUrl}/${from}.json`);

        // Stop if the server responded with an error, such as 404.
        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();

        // The API response is shaped like:
        // { "date": "...", "usd": { "inr": 83.52, "eur": 0.92, ... } }
        const rate = data[from]?.[to];

        // Ensure that a valid numeric rate was found.
        if (typeof rate !== "number") {
          throw new Error(`Rate not found for ${from} to ${to}`);
        }

        return rate;
      } catch (error) {
        // Save the error, then try the next API base URL.
        lastError = error;
      }
    }

    // Both API URLs failed.
    throw lastError;
  }
});
