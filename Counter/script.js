const countDisplay = document.querySelector("#count");
const decrementButton = document.querySelector(".decBtn");
const incrementButton = document.querySelector(".incBtn");
const resetButton = document.querySelector(".resetBtn");
const stepInput = document.querySelector("#plus-minus");

let count = 0;

function getStepValue() {
  const step = Number(stepInput.value);

  if (!Number.isFinite(step) || step <= 0) {
    stepInput.value = 1;
    return 1;
  }

  return step;
}

function updateCount() {
  countDisplay.textContent = count;
}

incrementButton.addEventListener("click", () => {
  count += getStepValue();
  updateCount();
});

decrementButton.addEventListener("click", () => {
  count -= getStepValue();
  updateCount();
});

resetButton.addEventListener("click", () => {
  count = 0;
  stepInput.value = 1;
  updateCount();
});

stepInput.addEventListener("input", getStepValue);
