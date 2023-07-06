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

  lowercaseCharacters = confirm("Do you want lowercase characters?");
  if (lowercaseCharacters) {
    var toLowerCase = alert("You have selected to use lowercase characters.");
  } else {
    alert("You have opted out of using lowercase characters.");
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
