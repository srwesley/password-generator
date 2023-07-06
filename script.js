// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialChar = "!#$%&()/*+-";
 
function generatePassword() {
  console.log("The button was clicked!");

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
    var toLowerCase = alert("You have selected to use lowercase characters.");
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
  // return "Random password goes here!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
