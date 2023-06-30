// Assignment code here


// Get references to the #generate element
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
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", "<", ".", ">", "/", "?", ";", ":", '"', "'", "[", "{", "]", "}", "\\", "|", "`", "~" ];

  // gather selection choices from user
  var characters = window.prompt("Number of characters: (8-24)");
  var hasSpecial = window.confirm("Include special characters?");
  var hasNumber = window.confirm("Include numbers?");
  var hasUpper = window.confirm("Include uppercase characters?");
  var hasLower = window.confirm("Include lowercase characters?");

  while ( !(hasUpper || hasLower) ) {
    var hasUpper = window.confirm("Include uppercase characters?");
    var hasLower = window.confirm("Include lowercase characters?");
  }

  // configure selection array
  var selection = [];
  if (hasUpper)   { selection = selection.concat(upperAlpha); }
  if (hasLower)   { selection = selection.concat(lowerAlpha); }
  if (hasSpecial) { selection = selection.concat(specialChars); }
  if (hasNumber)  { selection = selection.concat(numbers); }

  //
  
  }
