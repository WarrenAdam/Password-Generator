var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['@', '!', '#', '$', '&', '%', '*'];

var length = 8;
var passwordOptions = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

}

function prompts() {
  length = parseInt(prompt("How many characters (between 8-128) would you like for your password?"));

  if (isNaN(length) || length < 8 || length >128) {
    alert("Please try again, password length must be 8 - 128 digits.");
    return false;
  }
  // decides what user would like in password
if (confirm("Would you like lowercase letters in your password?")) {
  passwordOptions = passwordOptions.concat(lowerCase);
}
if (confirm("Would you like uppercase letters in your password?")) {
  passwordOptions = passwordOptions.concat(upperCase);
}
if (confirm("Would you like special characters in your password?")) {
  passwordOptions = passwordOptions.concat(special);
}
if (confirm("Would you like numbers in your password?")) {
  passwordOptions = passwordOptions.concat(numbers);
}
}
