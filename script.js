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

passwordLength = () => {
  let passLength = window.prompt("Enter a password length between 8 and 128:");
  if(passLength >= 8 && passLength <= 128) {
    return passLength
  } else {
    window.alert("Invalid entry");
    passwordLength();
  }

}

generatePassword = () => {
  passwordLength()
}