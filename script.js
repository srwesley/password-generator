// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("The button was clicked!");
  
  var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChar = ['!', '#', '$', '%', '&'];
  var randomCharacters = [];

  numberOfCharacters = prompt("Choose a number of characters wanted in your password, which is between 8 and 128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  } else {
    alert("Your password will be " + numberOfCharacters + " characters long.")
  }

  lowercaseCharacters = confirm("Do you want to use lowercase characters?");
  if (lowercaseCharacters) {
    alert("You have selected to use lowercase characters.");
  } else {
    alert("You have opted out of using lowercase characters.");
  }

  upperCaseCharacters = confirm("Do you want to use uppercase characters?");
  if (upperCaseCharacters) {
    alert("You have selected to use uppercase characters.");
  } else {
    alert("You have opted out of using uppercase letters.");
  }

  numbers = confirm("Do you want to use numbers?");
  if (numbers) {
    alert("You have selected to use numbers.");
  } else {
    alert("You have opted out of using numbers.");
  }

  specialCharacters = confirm("Do you want to use special characters?");
  if (specialCharacters) {
    alert("You have selected to use special characters.");
  } else {
    alert("You have opted out of using special characters.");
  }

  if (lowercaseCharacters === false && upperCaseCharacters === false && numbers === false && specialCharacters === false) {
    return "Please use at least one character type, thanks.";
  };

  if (lowercaseCharacters) {
    randomCharacters = randomCharacters.concat(lowerCaseChar);
  } if (upperCaseCharacters) {
    randomCharacters = randomCharacters.concat(upperCaseChar);
  } if (numbers) {
    randomCharacters = randomCharacters.concat(numbericChar);
  } if (specialCharacters) {
    randomCharacters = randomCharacters.concat(specialChar);
  };

  let randomPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let randomized = [Math.floor(Math.random() * randomCharacters.length)];
    randomPassword = randomPassword + randomCharacters[randomized];
  }
  return randomPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
