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
  // Confirm number between below range
  if(passLength >= 8 && passLength <= 128) {
    return passLength
  // Alert that there is an invalid entry and reprompt for length again
  } else {
    window.alert("Invalid entry");
    passwordLength();
  }

}

includeLowercase= () => {
  let lowercase = window.prompt("Should the password include lowercase letters? Yes or No?")
  // Confirm a yes or no response
  if(lowercase.toLowerCase() === "yes") {
    return true;
  } else if (lowercase.toLowerCase() === "no") {
    return false;
  } else {
    // Alert there is an invalid entry and reprompt
    window.alert("Invalid entry");
    includeLowercase();
  }
}

includeUppercase= () => {
  let uppercase = window.prompt("Should the password include uppercase letters? Yes or No?")
  // Confirm a yes or no response
  if( uppercase.toLowerCase() === "yes") {
    return true;
  } 
  else if (uppercase.toLowerCase() === "no") {
    return false;
  }
  else {
    // Alert there is an invalid entry and reprompt
    window.alert("Invalid entry");
    includeUppercase();
  }
}

includeNumber = () => {
  let number = window.prompt("Should the password include number(s)? Yes or No?")
  // Confirm yes or no response
  if(number.toLowerCase() === "yes") {
    return true;
  }
  else if (number.toLowerCase() === "no") {
    return false;
  }
  else {
    // Alert there is an invalid entry and reprompt
    window.alert("Invalid entry");
    includeNumber();    
  }
}

generatePassword = () => {
  passLength = passwordLength();
  lowercase = includeLowercase();
  uppercase = includeUppercase();
  number = includeNumber();
}