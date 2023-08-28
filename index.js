const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let inputPasswordLength = document.getElementById("password-length");
let isSymbolsChecked = false;
let isNumbersChecked = false;

console.log(" input password length", inputPasswordLength);
function generatePassword() {
  let charactersArray = checkIsToggled();

  console.log(charactersArray);

  let passwordLength = inputPasswordLength.value === "" ? 18 : inputPasswordLength.value;

  let length = charactersArray.length;

  console.log("char", charactersArray);
  passwordOne.textContent = "";
  passwordTwo.textContent = "";
  for (let i = 0; i < passwordLength; i++) {
    passwordOne.textContent += charactersArray[Math.floor(Math.random() * length)];
    passwordTwo.textContent += charactersArray[Math.floor(Math.random() * length)];
  }
}

async function copyToClipboard(btn) {
  if (passwordOne.textContent !== "" && passwordTwo.textContent !== "") {
    let copyText = document.getElementById(`password-${btn}`).textContent;
    await navigator.clipboard.writeText(copyText);
    alert("copied text");
  }
}

function toggleCheckBox(val) {
  let check = document.getElementById(`toggle-${val}`);

  if (val === "symbols") {
    isSymbolsChecked = check.checked;
  } else if (val === "numbers") {
    isNumbersChecked = check.checked;
  }
}

function checkIsToggled() {
  if (isNumbersChecked && isSymbolsChecked) {
    return characters.filter(char => !numbers.includes(char) && !symbols.includes(char));
  } else if (isNumbersChecked) {
    return characters.filter(char => {
      return !numbers.includes(char);
    });
  } else if (isSymbolsChecked) {
    return characters.filter(char => {
      return !characters.includes(char);
    });
  }
}
