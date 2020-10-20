// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//This function generates and returns a random character from a-z
function randomAlpha() {
  var keyListAlpha = "abcdefghijklmnopqrstuvwxyz";
  return keyListAlpha.charAt(Math.floor(Math.random() * keyListAlpha.length));
}

//This function generates and returns a random character from 0-9
function randomNumeric () {
  var keyListInt = "0123456789";
  return keyListInt.charAt(Math.floor(Math.random() * keyListInt.length));
}

//This function generates and returns a random special character
function randomSpecial () {
  var keyListSpec = "!@#$%^&*()";
  return keyListSpec.charAt(Math.floor(Math.random() * keyListSpec.length));
}

//Primary password generating function
function generatePassword() {
  var passwordLength = prompt("Please enter length of password between 8-128");

  //This if statement checks and ensures that the length chosen is between 8-128 and prevents the process from moving forward if not
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Invalid password length...passwords must be between 8-128 characters.");
    while (passwordLength > 128 || passwordLength < 8) {
      var passwordLength = prompt("Please enter length of password between 8-128");
    }
  }
  
  //Confirmation alert boxes for user choices
  var passwordLower = confirm("Include lower case characters?");
  var passwordUpper = confirm("Include upper case characters?");
  var passwordNumeric = confirm("Include numeric characters?");
  var passwordSpecial = confirm("Include special characters?");

  //Ensures atleast one option is selected
  while (!passwordLower && !passwordUpper && !passwordNumeric && !passwordSpecial) {
    alert("One option must be selected")
    var passwordLower = confirm("Include lower case characters?");
    var passwordUpper = confirm("Include upper case characters?");
    var passwordNumeric = confirm("Include numeric characters?");
    var passwordSpecial = confirm("Include special characters?");
  }

  var passwordFinal = '';
  var passwordFinal2 = '';

  for (let i = 0; i < passwordLength; i++) {
    var randomType = Math.floor(Math.random() * 3) + 1;
    //creates a random number from 1 to 3

    //here we check the random number generated and add a character accordingly
    if (randomType == 2 && passwordNumeric) {
      passwordFinal += randomNumeric();
    } else if (randomType == 3 && passwordSpecial) {
      passwordFinal += randomSpecial();
    } else {
      passwordFinal += randomAlpha();
    }
  }

  //This section adds upper or lower casing depending on if user chooses one or the other, first checking if both were inputted
  for (let i = 0; i < passwordFinal.length; i++) {
    if (passwordUpper && passwordLower) {
      var randomType = Math.floor(Math.random() * 2) + 1;
      if (randomType == 1) {
        passwordFinal2 += passwordFinal[i].toLowerCase();
      } else {
        passwordFinal2 += passwordFinal[i].toUpperCase();
      }

      //checking if only one was inputted (lower) (this section could possibly be removed since all characters are lower case anyway from string)
    } else if (passwordLower){
      passwordFinal2 += passwordFinal[i].toLowerCase();

      //upper case only
    } else if (passwordUpper){
      passwordFinal2 += passwordFinal[i].toUpperCase();

      //no choices made, default is lower case
    } else {
      passwordFinal2 += passwordFinal[i];
    } 
  }
  return passwordFinal2;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
