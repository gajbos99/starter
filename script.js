'use strict';

// App Developing
// Guess My Number!

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Creates random number UNDER 21
let score = 20; // Sets standard score to 20
let highscore = 0; // Sets highscore for the first time.

const displayMessage = function (message) {
  // Creates a function to make it easier to change the message on the page.
  document.querySelector('.message').textContent = message; // String given when using this function will be the new text.
};

document.querySelector('.check').addEventListener('click', function () {
  // When the button is clicked, console log value.
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // As you can see the value is a string, when you wanna compare it to a number you gotta convert it to a number first.

  if (!guess) {
    // If no value has been given
    displayMessage('No Number :(');
  } else if (guess === secretNumber) {
    // If the secret number has been guessed.
    displayMessage('Correct Number! :)');
    // Displays text
    document.querySelector('.number').textContent = secretNumber;
    // Shows secret number on the page.
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Changes color of background.
    document.querySelector('.number').style.width = '30rem';
    // Changes width of block secret number is shown on

    if (score > highscore) {
      // Checks if current score is higher than highscore.
      highscore = score;
      // If true, new highscore will be set equal to score.
      document.querySelector('.highscore').textContent = highscore;
      // Here it gets set to the dom.
    }
  } else if (guess !== secretNumber) {
    // If the guess is wrong.
    if (score > 1) {
      // Checks if the score is still higher than 1.
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      // If guess is higher than secret number textContent is Too High!, else is Too Low!.
      score--;
      // -1 on the score as its a wrong guess.
    } else {
      displayMessage('You lost the game!');
      // Displays this message
      document.querySelector('.score').textContent = 0;
      // Puts score on zero as the game is finished.
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Creating a button on click funtion for the again button
  score = 20;
  // Resetting score to 20 for new game
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Re-sets random number.
  // Generating a new, random secret number.
  displayMessage('Start guessing...');
  // Displaying the standard message.
  document.querySelector('.score').textContent = score;
  // Setting the score back to the standard in the DOM.
  document.querySelector('.number').textContent = '?';
  // Setting the question mark back to standard.
  document.querySelector('.guess').value = '';
  // Make the guess field empty again.
  document.querySelector('body').style.backgroundColor = '#222';
  // Change background color to standard.
  document.querySelector('.number').style.width = '15rem';
  // Change secret number block back to normal width.
});
