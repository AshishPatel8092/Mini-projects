// Get the elements once, then reuse them whenever the user interacts.
const bmiForm = document.querySelector("#bmiForm");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const result = document.querySelector("#result");

/**
 * Returns a BMI category based on the calculated BMI value.
 *
 * @param {number} bmi - The calculated BMI.
 * @returns {string} A readable BMI category.
 */
function getBmiCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Healthy weight";
  if (bmi < 30) return "Overweight";

  return "Obesity";
}

/**
 * Runs when the user submits the form.
 * `event.preventDefault()` stops the page from refreshing.
 */
bmiForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Convert input values from strings into numbers.
  const heightInCm = Number(heightInput.value);
  const weightInKg = Number(weightInput.value);

  // Check that both fields contain valid positive numbers.
  if (
    !Number.isFinite(heightInCm) ||
    !Number.isFinite(weightInKg) ||
    heightInCm <= 0 ||
    weightInKg <= 0
  ) {
    result.textContent = "Please enter a valid height and weight.";
    result.className = "result error";
    return;
  }

  // BMI formula uses height in metres, so convert centimetres to metres.
  const heightInMetres = heightInCm / 100;

  // BMI = weight in kilograms ÷ (height in metres × height in metres).
  const bmi = weightInKg / heightInMetres ** 2;

  // Keep the display neat by showing two decimal places.
  const formattedBmi = bmi.toFixed(2);

  // Find the category using the calculated BMI.
  const category = getBmiCategory(bmi);

  // Display the final result to the user.
  result.textContent = `Your BMI is ${formattedBmi} — ${category}.`;
  result.className = "result success";
});

/**
 * Restore the default message after the Reset button clears the form.
 */
bmiForm.addEventListener("reset", () => {
  result.textContent = "Your BMI result will appear here.";
  result.className = "result";
});
