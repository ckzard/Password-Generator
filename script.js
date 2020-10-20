// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function randomAlpha() {
  var keyListAlpha = "abcdefghijklmnopqrstuvwxyz";
  return keyListAlpha.charAt(Math.floor(Math.random() * keyListAlpha.length));
}

function randomNumeric () {
  var keyListInt = "123456789";
  return keyListInt.charAt(Math.floor(Math.random() * keyListInt.length));
}

function randomSpecial () {
  var keyListSpec = "!@#$%^&*()";
  return keyListSpec.charAt(Math.floor(Math.random() * keyListSpec.length));
}

function generatePassword() {
  var passwordLength = prompt("Please enter length of password between 8-128");

  if (passwordLength > 128 || passwordLength < 8) {
    alert("Invalid password length...passwords must be between 8-128 characters.");
    while (passwordLength > 128 || passwordLength < 8) {
      var passwordLength = prompt("Please enter length of password between 8-128");
    }
  }
  
  var passwordLower = confirm("Include lower case characters?");
  var passwordUpper = confirm("Include upper case characters?");
  var passwordNumeric = confirm("Include numeric characters?");
  var passwordSpecial = confirm("Include special characters?");

  var passwordFinal = '';
  var passwordFinal2 = '';

  for (let i = 0; i < passwordLength; i++) {
    var randomType = Math.floor(Math.random() * 3) + 1;
    //creates a random number from 1 to 3, depending on the number a different character type will be added to password

    if (randomType == 2 && passwordNumeric) {
      passwordFinal += randomNumeric();
    } else if (randomType == 3 && passwordSpecial) {
      passwordFinal += randomSpecial();
    } else {
      passwordFinal += randomAlpha();
    }
  }

  for (let i = 0; i < passwordFinal.length; i++) {
    if (passwordUpper && passwordLower) {
      var randomType = Math.floor(Math.random() * 2) + 1;
      if (randomType == 1) {
        passwordFinal2 += passwordFinal[i].toLowerCase();
      } else {
        passwordFinal2 += passwordFinal[i].toUpperCase();
      }

    } else if (passwordLower){
      passwordFinal2 += passwordFinal[i].toLowerCase();
    } else if (passwordUpper){
      passwordFinal2 += passwordFinal[i].toUpperCase();
    } else {
      passwordFinal2 += passwordFinal[i];
    } 
  }
  return passwordFinal2;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
