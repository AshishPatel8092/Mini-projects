// Stores the secret number, number of attempts, and current game status.
let randomNumber;
let attempts;
let gameOver;

// Select all required HTML elements.
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const bestScoreDisplay = document.getElementById("bestScore");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");

// Get the previous best score from the browser's local storage.
let bestScore = Number(localStorage.getItem("bestScore"));

// Show the best score if one exists.
if (Number.isInteger(bestScore) && bestScore > 0) {
  bestScoreDisplay.textContent = bestScore;
}

// Starts a new game.
function startNewGame() {
  // Generates a random integer from 1 to 100.
  randomNumber = Math.floor(Math.random() * 100) + 1;

  // Resets the game values and interface.
  attempts = 0;
  gameOver = false;

  attemptsDisplay.textContent = attempts;
  message.textContent = "Start Guessing...";
  guessInput.value = "";
  guessInput.disabled = false;
  guessBtn.disabled = false;

  // Places the cursor back in the input box.
  guessInput.focus();
}

// Checks the user's guess.
function checkGuess() {
  // Prevents guesses after the correct answer was found.
  if (gameOver) return;

  // Converts the input value into a number.
  const guess = Number(guessInput.value);

  // Validates that the input is a whole number between 1 and 100.
  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a whole number from 1 to 100.";
    guessInput.focus();
    return;
  }

  // Increases and displays the attempts count.
  attempts += 1;
  attemptsDisplay.textContent = attempts;

  // Checks whether the guess is correct.
  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! You found it in ${attempts} attempt${
      attempts === 1 ? "" : "s"
    }.`;

    gameOver = true;
    guessInput.disabled = true;
    guessBtn.disabled = true;

    // Saves the score only when it is better than the previous score.
    if (!bestScore || attempts < bestScore) {
      bestScore = attempts;
      localStorage.setItem("bestScore", String(bestScore));
      bestScoreDisplay.textContent = bestScore;
    }

    return;
  }

  // Gives a hint if the number is incorrect.
  if (guess < randomNumber) {
    message.textContent = "📈 Too low! Try a higher number.";
  } else {
    message.textContent = "📉 Too high! Try a lower number.";
  }

  // Clears input for the next attempt.
  guessInput.value = "";
  guessInput.focus();
}

// Checks a guess when the Guess button is clicked.
guessBtn.addEventListener("click", checkGuess);

// Allows the player to press Enter instead of clicking Guess.
guessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});

// Starts a new game when the restart button is clicked.
restartBtn.addEventListener("click", startNewGame);

// Starts the first game when the page loads.
startNewGame();
