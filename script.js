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









// Function to prompt user for password options
function getPasswordOptions() {


  function getPasswordOptions() {
    let passwordLength = parseInt(prompt("How long do you want your password to be? (Must be between 8 and 128 characters)"));
  
    // Validate password length
    if (passwordLength < 8 ||  passwordLength > 128) {
      alert("Invalid input. Password length must be a number and between 8 - 128 characters.");
      return; // Exit the function if the input is invalid
    }
  
    let includeSpecialCharacters = confirm("Do you want to include special characters?");
    let includeNumericCharacters = confirm("Do you want to include numeric characters?");
    let includeLowercaseCharacters = confirm("Do you want to include lowercase characters?");
    let includeUppercaseCharacters = confirm("Do you want to include uppercase characters?");
  
    // Validate that at least one character type is selected
    if (!(includeSpecialCharacters || includeNumericCharacters || includeLowercaseCharacters || includeUppercaseCharacters)) {
      alert("You must select at least one character type.");
      return; // Exit the function if no character type is selected
    }
  
    console.log(passwordOptions);
    return passwordOptions;  

  }
  







// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions ()
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);