// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];





function getPasswordOptions() {
  let passwordLength = parseInt(prompt("How long do you want your password to be? (Must be between 8 and 128 characters)"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid input. Password length must be between 8 - 128 characters.");
    return;
  }

  let includeSpecialCharacters = confirm("Do you want to include special characters?");
  let includeNumericCharacters = confirm("Do you want to include numeric characters?");
  let includeLowercaseCharacters = confirm("Do you want to include lowercase characters?");
  let includeUppercaseCharacters = confirm("Do you want to include uppercase characters?");

  if (!(includeSpecialCharacters || includeNumericCharacters || includeLowercaseCharacters || includeUppercaseCharacters)) {
    alert("You must select at least one character type.");
    return; 
  }

  return {
    passwordLength,
    includeSpecialCharacters,
    includeNumericCharacters,
    includeLowercaseCharacters,
    includeUppercaseCharacters,
  };


  console.log(getPasswordOptions()); 
}


function generateAndDisplayPassword() {
  const options = getPasswordOptions();
  if (!options) return; 

  let combinedCharacters = [];

  if (options.includeSpecialCharacters) {
    combinedCharacters = combinedCharacters.concat(specialCharacters);
  }
  if (options.includeNumericCharacters) {
    combinedCharacters = combinedCharacters.concat(numericCharacters);
  }
  if (options.includeLowercaseCharacters) {
    combinedCharacters = combinedCharacters.concat(lowerCasedCharacters);
  }
  if (options.includeUppercaseCharacters) {
    combinedCharacters = combinedCharacters.concat(upperCasedCharacters);
  }

  let generatedPassword = '';

  for (let i = 0; i < options.passwordLength; i++) {
    const randomCharacter = combinedCharacters[Math.floor(Math.random() * combinedCharacters.length)];
    generatedPassword += randomCharacter;
  }

var password = generatedPassword
  document.getElementById('password').value = generatedPassword;
}

var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', generateAndDisplayPassword);
