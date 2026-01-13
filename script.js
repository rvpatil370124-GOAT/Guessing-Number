'use strict';

//DOM : DOCUMENT OBJECT MODEL => Structured representation of html documents.Allows javascript to access html elements and styles to manipulate them.

// console.log(document.querySelector('.message').textContent);
//querySelector => used to select the element.
//.textContent => used to access the text in particular element.
// document.querySelector('.message').textContent = '🎊 Correct Number!';
//here we done the DOM Manipulation by manipulating the text.

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// .value => With an Input-field to get the actual value.
// document.querySelector('.guess').value = 28;
// console.log(document.querySelector('.guess').value);
//shortcut: use Alt + up/down arrow to move in upward/downward line.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // we are using 'let' here because we have to mutate a values.
let highscore = 0;

//addEventListener => a function which handles the event like click on button.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Wgen there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 NO NUMBER!';
  }
  //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎊 CORRECT NUMBER!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    //here we follow the camelCase to write the background-color property and other properties must write in camelCase.
    document.querySelector('.number').style.width = '30rem';
    //unit/value of a property should always be in string.
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is too high
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 TOO HIGH!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🪦 YOU LOST THE GAME!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 TOO LOW!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🪦 YOU LOST THE GAME!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

////////////////////////////////////////
// Coding Challenge #1

/*
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attack a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number, score and guess input field
4.Also restore the original background-color (#222) and number width (15em)

*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random()*20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'START GUESSING...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
