// Selects the calculator display using its id.
const inputBox = document.querySelector("#inputBox");
const buttons = document.querySelectorAll("button");

// Stores the current typed calculation, such as "12+5".
let expression = "";

// Updates the calculator display.
function updateDisplay() {
  // Shows the expression, or shows 0 when it is empty.
  inputBox.value = expression || "0";
}

// Loops through every calculator button.
buttons.forEach((button) => {
  // Runs this code whenever the current button is clicked.
  button.addEventListener("click", () => {
    // Gets the text written on the clicked button.
    const buttonValue = button.textContent.trim();

    // Checks whether the AC button was clicked.
    if (buttonValue === "AC") {
      // Clears the saved calculation.
      expression = "";

      // Updates the screen to show 0.
      updateDisplay();

      // Stops running the remaining code.
      return;
    }

    // Checks whether the DEL button was clicked.
    if (buttonValue === "DEL") {
      // Removes the last character from the calculation.
      expression = expression.slice(0, -1);

      // Shows the updated calculation.
      updateDisplay();

      // Stops running the remaining code.
      return;
    }

    // Checks whether the = button was clicked.
    if (buttonValue === "=") {
      // Uses try so invalid calculations do not break the calculator.
      try {
        // Does nothing if there is no calculation.
        if (!expression) return;

        // Changes a percentage such as 25% into (25/100).
        const calculation = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

        // Calculates the final expression.
        const result = Function(`"use strict"; return (${calculation})`)();

        // Rejects results such as Infinity.
        if (!Number.isFinite(result)) {
          // Sends invalid results to the catch block.
          throw new Error("Invalid result");
        }

        // Saves the answer so another calculation can continue from it.
        expression = String(result);

        // Displays the answer.
        inputBox.value = expression;
      } catch (error) {
        // Shows Error if the calculation is invalid.
        inputBox.value = "Error";

        // Clears the stored calculation after an error.
        expression = "";
      }

      // Stops running the remaining code.
      return;
    }

    // Prevents starting with +, *, /, or %.
    if (expression === "" && ["+", "*", "/", "%"].includes(buttonValue)) {
      // Stops if an invalid starting operator was clicked.
      return;
    }

    // Adds the clicked number, dot, or operator to the calculation.
    expression += buttonValue;

    // Displays the updated calculation.
    inputBox.value = expression;
  });
});
