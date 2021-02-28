// variable arrays
function generatePassword() {
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];

  // get input of numbers and validate whether number is correct 
  numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please enter a valid number of characters to be used.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
    
  }

  // option to include uppercase letters
 
  hasUppercase = confirm("Do you want to include uppercase characters?");
  if (hasUppercase) {
    alert("Your password will include uppercase characters.");
  }
  else {
    alert("Your password will NOT include uppercase characters.");
  }
 
  // option to include lowercase letters
 
  hasLowercase = confirm("Do you want lowercase characters?");
  if (hasLowercase) {
    var turnToLowercase = alert("Your password will include lowercase characters.");
  }
  else {
    alert("Your password will NOT include lowercase characters.");
  }

  // option to include numbers
  
  hasNumbers = confirm("Do you want to use numbers?");
  if (hasNumbers) {
    alert("Your password will include numbers.");
  }
  else {
    alert("Your password will NOT include numbers.");
  }

  // option to include special characters
  
  hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Your password will include special characters.");
  }
  else {
    alert("Your password will NOT include special characters.");
  }

  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type.";
  };

  // group selected characters
 
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // pick random cards out of new pool for length of password
  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    // or finalPassword += possibleCharacters[rng];
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
