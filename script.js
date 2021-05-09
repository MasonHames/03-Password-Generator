// Assignment Code
var generateBtn = document.querySelector("#generate");

let enter;
let confirmNumber;
let confirmSymbol;
let confirmUppercase;
let confirmLowercase;

symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

let choices;
 
let toUpper = function (x) {
    return x.toUpperCase();
};

uppercaseLetters = lowercaseLetters.map(toUpper);

let get = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // went with a prompt for better input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // added a check to make sure that the first prompt wasn't skipped
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
     enter = parseInt(prompt("You must choose between 8 and 128"));
 } else {
      confirmNumber = confirm("Will this contain numbers?");
      confirmSymbol = confirm("Will this contain special symbols?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };
  // confirming that user inputs valid values
  if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose a criteria!");
  }
  // else if for 4 true optiions
  else if (confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {

      choices = symbol.concat(number, lowercaseLetters, uppercaseLetters);
  }
  // else if's for 3 true options
  else if (confirmSymbol && confirmNumber && confirmUppercase) {
      choices = symbol.concat(number, uppercaseLetters);
  }
  else if (confirmSymbol && confirmNumber && confirmLowercase) {
      choices = symbol.concat(number, lowercaseLetters);
  }
  else if (confirmSymbol && confirmLowercase && confirmUppercase) {
      choices = symbol.concat(lowercaseLetters, uppercaseLetters);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(lowercaseLetters, uppercaseLetters);
  }
  // else if's for 2 true options 
  else if (confirmSymbol && confirmNumber) {
      choices = symbol.concat(number);

  } else if (confirmSymbol && confirmLowercase) {
      choices = symbol.concat(lowercaseLetters);

  } else if (confirmSymbol && confirmUppercase) {
      choices = symbol.concat(uppercaseLetters);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = lowercaseLetters.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      choices = lowercaseLetters.concat(uppercaseLetters);

  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(uppercaseLetters);
  }
  // else if's for just 1 true option
  else if (confirmSymbol) {
      choices = symbol;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLowercase) {
      choices = lowercaseLetters;
  }
  // space for uppercase conversion
  else if (confirmUppercase) {
      choices = space.concat(uppercaseLetters);
  };
  // SO MANY ELSE IF STATEMENTS
  let password = [];

  // using math.floor to round out any non-whole numbers for better selections
  // Random selection for all let based variables: 
  for (let i = 0; i < enter; i++) {
      let pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }
  // this joins the password array and converts it to a string
  let ps = password.join("");
  UserInput(ps);
  return ps;
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




////Confirm the method that the user wished to use for building the password
//done