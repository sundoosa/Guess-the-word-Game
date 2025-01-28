// // Create global variables to select the following elements:
// The unordered list where the player’s guessed letters will appear.
// The button with the text “Guess!” in it.
// The text input where the player will guess a letter.
// The empty paragraph where the word in progress will appear.
// The paragraph where the remaining guesses will display.
// The span inside the paragraph where the remaining guesses will display.
// The empty paragraph where messages will appear when the player guesses a letter.
// The hidden button that will appear prompting the player to play again.
// Create another global variable called word and give it the value of "magnolia".
// //  Magnolia is your starting word to test out the game until you fetch words from a hosted file in a later step.

const guessedLetters = document.querySelector(".guessed-letters")
const guessButton = document.querySelector(".guess")
const guessInput = document.querySelector(".letter")
const wordProgress = document.querySelector(".word-in-progress")
const remainingGuesses = document.querySelector(".remaining")
const guessSpan = document.querySelector(".remaining span")
const guessMessage = document.querySelector(".message")
const playAgainButton = document.querySelector(".play-again hide")

let word = "magnolia"


function makePlaceholderSymbols(word) {
    // first get count of word letters
    console.log(word.length)
    // then, make that many symbols as a string
    let placeholder = "●".repeat(word.length)
    console.log(placeholder)
    // then, update word progress innertext to the symbols 
    wordProgress.innerText = placeholder
}
makePlaceholderSymbols(word)



guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty message paragraph
    message.innerText = "";
    // Let's grab what was entered in the input
    const guess = letterInput.value;
    // Let's make sure that it is a single letter
    const goodGuess = validateInput(guess);
  
    if (goodGuess) {
      // We've got a letter! Let's guess!
      makeGuess(guess);
    }
    letterInput.value = "";
  });

// Create a Function to Check Player’s Input

// Create and name a function that accepts the input value as a parameter. This function’s purpose is to validate the player’s input.
// Inside the function, create a variable for the accepted letter sequence: const acceptedLetter = /[a-zA-Z]/. Now your code uses a regular expression to ensure the player inputs a letter!
// Still inside the function, use a conditional block to check for different scenarios. First, check if the input is empty. Then, check if the player has entered more than one letter. Finally, check if they’ve entered a character that doesn’t match the regular expression pattern. Hint: You’ll need the .match() method here. Each condition should have a message directing the player on what to input. 
// If all the other conditions aren’t met, the input is a letter, which is what you’re looking for! Return the input.

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/ ;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    }
else if (input.length > 1) {
    // Did you type more than one letter?
    message.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    // Did you type a number, a special character or some other non letter thing?
    message.innerText = "Please enter a letter from A to Z.";
  } else {
    // We finally got a single letter, omg yay
    return input;
  }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
      message.innerText = "You already guessed that letter, silly. Try again.";
    } else {
      guessedLetters.push(guess);
      console.log(guessedLetters);
    }
  };
