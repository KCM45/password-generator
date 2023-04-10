// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
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

includeSpecial = () => {
  let special = window.prompt("Should the password contain special characters? Yes or No?")

  if(special.toLowerCase() === "yes") {
    return true;
  }
  else if(special.toLowerCase() === "no") {
    return false;
  }
  else
    // Alert there is an invalid entry and reprompt
    window.alert("Invalid entry");
    includeSpecial();
}

getCharacterSet = (lowercase, uppercase, number, special) => {
  // Rstart program if no criteria selected
  if(!lowercase && !uppercase && !number && !special) {
    window.alert("No criteria selected. Start over.");
    generatePassword();
    return;
  }
  // Obtain character set
  let characterSet = "";
  if(lowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if(uppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(number) {
    characterSet += "0123456789"
  }
  if(special) {
    characterSet += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
  return characterSet; 
}

getPassword = (characterSet, passLength, lowercase, uppercase, number, special) => {
  // Use chatacterset to generate random password string
  let test = false;
  let password = [];
  while(!test) {
    for(let i = 0; i < passLength; i++) {
      randomInt = Math.floor(Math.random() * characterSet.length);

      console.log(randomInt);
      password[i] = characterSet[randomInt];
    }
    // Convert to string
    console.log(password);
    password = password.join("");
    console.log(password);

    test = checkPassword(password, lowercase, uppercase, number, special);
  }
  return password;  
}

checkPassword = (password, lowercase, uppercase, number, special) => {
  // Check password meets criteria. If not, rerun getPassword()
  if(lowercase && !(/[a-z]/.test(password))) {
      return false;
  }
  if(uppercase) {
    if(!(/[A-Z]/.test(password))) {
      return false;
    }
  }
  if(number) {
    if(!(/[0-9]/.test(password))) {
      return false;
    }
  }
  if(special) {
    if(!(/[!@#$%^&*]/.test(password))) {
      return false;

    }
  }
  return true;

}

generatePassword = () => {
  let passLength = passwordLength();
  let lowercase = includeLowercase();
  let uppercase = includeUppercase();
  let number = includeNumber();
  let special = includeSpecial();
  let characterSet = getCharacterSet(lowercase, uppercase, number, special);
  let password = getPassword(characterSet, passLength, lowercase, uppercase, number, special);
  return password;
}

init = () => writePassword()

// Add event listener to table
const el = document.getElementById("generate");
el.addEventListener("click", init, false);