// Select the button using its id from the HTML
const button = document.getElementById("clickBtn");

// Select the <b> element that displays the current background color
const colorText = document.getElementById("color");

// This function creates and returns a random hexadecimal color code.
// Example output: #A3F91C
function getRandomColor() {
  // These are the valid characters used in a hex color code
  const hexCharacters = "0123456789ABCDEF";

  // Start the color code with the # symbol
  let color = "#";

  // A hex color needs six characters after the #.
  // This loop runs six times and adds one random character each time.
  for (let i = 0; i < 6; i++) {
    // Math.random() gives a random decimal from 0 up to 1.
    // Multiplying by 16 gives a number from 0 up to 15.
    // Math.floor() converts it to a whole number.
    // That number chooses a random position in hexCharacters.
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }

  // Send the finished color back to wherever this function is called
  return color;
}

// Run this code every time the user clicks the button
button.addEventListener("click", () => {
  // Generate one new random color and save it in a variable
  const newColor = getRandomColor();

  // Change the webpage background to the new random color
  document.body.style.backgroundColor = newColor;

  // Update the displayed color code in the HTML
  colorText.textContent = newColor;
});
