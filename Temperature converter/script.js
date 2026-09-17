// Select the form so we can listen for its submit event.
const form = document.querySelector("#converterForm");

// Select the input where the user enters a temperature.
const textbox = document.querySelector(".value");

// Select the result heading where converted temperature is displayed.
const result = document.querySelector(".result");

// Run this function when the form is submitted.
form.addEventListener("submit", function (event) {
  // Prevent the form from refreshing the page.
  event.preventDefault();

  // Convert the input text into a JavaScript number.
  const temperature = Number(textbox.value);

  // Find which conversion radio button the user selected.
  const selectedConversion = document.querySelector(
    'input[name="conversion"]:checked',
  );

  // Check that the user entered a valid numeric value.
  if (textbox.value.trim() === "" || Number.isNaN(temperature)) {
    result.textContent = "Please enter a valid temperature.";
    return; // Stop the function if input is invalid.
  }

  // Convert Celsius to Fahrenheit.
  if (selectedConversion.value === "toFahrenheit") {
    const fahrenheit = temperature * (9 / 5) + 32;

    // toFixed(1) limits the displayed result to one decimal place.
    result.textContent = `${fahrenheit.toFixed(1)} °F`;
  }

  // Convert Fahrenheit to Celsius.
  if (selectedConversion.value === "toCelsius") {
    const celsius = (temperature - 32) * (5 / 9);

    result.textContent = `${celsius.toFixed(1)} °C`;
  }
});
