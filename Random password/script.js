const passwordBox = document.getElementById("password");
const button = document.querySelector("button");
const copyBtn = document.querySelector("#copyBtn");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!~@#$%^&*({]}[)><?=*/|-_";

const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
};

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(password.value);

  copyBtn.textContent = "check";
  setTimeout(() => {
    copyBtn.textContent = "content_copy";
  }, 200);
});

button.addEventListener("click", () => {
  createPassword();
});
