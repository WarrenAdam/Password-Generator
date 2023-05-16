
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['@', '!', '#', '$', '&', '%', '*'];

var charLength = 8;
var passwordOptions = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var rightPrompts = prompts();
  var passwordText = document.querySelector("#password");

  if (rightPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
      passwordTest.value = "";
  }

}

function generatePassword() {
  var password = "";
  for (var i = 0; i < charLength; i++) {
    var randomLetter = Math.floor(Math.random() * passwordOptions.length);
    password = password + passwordOptions[randomLetter];
  }
  return password;

}

function prompts() {
  charLength = parseInt(prompt("How many characters (between 8-128) would you like for your password?"));
  passwordOptions = [];

  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Please try again, password length must be 8 - 128 digits.");
    return false;
  }
  // decides what user would like in password
  if (confirm("Would you like your password to have lowercase letters?")) {
    passwordOptions = passwordOptions.concat(lowerCase);
  }
  if (confirm("Would you like your password to have uppercase letters?")) {
    passwordOptions = passwordOptions.concat(upperCase);
  }
  if (confirm("Would you like your password to have special characters?")) {
    passwordOptions = passwordOptions.concat(special);
  }
  if (confirm("Would you like your password to have numbers?")) {
    passwordOptions = passwordOptions.concat(numbers);
  }
  return true;
}
