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
  
  // gather selection choices from user, validate, and configure 'selection' array
  var characters = window.prompt("Number of characters: (8-128)");

  while ( (characters < 8) || (characters > 128) ) {
    characters = window.prompt("Number of characters: (8-128)");
  }

  var selection = [];
  if (window.confirm("Include uppercase characters?")) { selection = selection.concat(upperAlpha); }
  if (window.confirm("Include lowercase characters?")) { selection = selection.concat(lowerAlpha); }

  while (selection.length === 0) {
    if (window.confirm("Include uppercase characters?")) { selection = selection.concat(upperAlpha); }
    if (window.confirm("Include lowercase characters?")) { selection = selection.concat(lowerAlpha); }
  }

  if (window.confirm("Inlcude numbers?"))            { selection = selection.concat(numbers); }
  if (window.confirm("Inlcude special characters?")) { selection = selection.concat(specialChars); }

  // pull a random char from 'selection' and push it into the password buffer 'characters' amount of times
  var pwBuffer = [];
  for (i = 0; i < characters; i++) { pwBuffer.push(selection[ Math.floor(Math.random() * selection.length) ]); }
  pwBuffer = pwBuffer.join("");
  return pwBuffer;
}
