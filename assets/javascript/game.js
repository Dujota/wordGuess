// Game Variables

let wins = 0;
let losses = 0;
let guessLeft = 10;
let userGuesses = [];
let randomLetter;
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

// UI Functions
winsElement = () => {
  document.getElementById('wins').innerHTML = wins;
};

lossesElement = () => {
  document.getElementById('losses').innerHTML = losses;
};

guessLeftElement = () => {
  document.getElementById('guessesLeft').innerHTML = guessLeft;
};

userGuessesElement = () => {
  document.getElementById('userGuess').innerHTML = userGuesses;
};

compChoice = () => {
  randomLetter =
    letters[Math.floor(Math.random() * Math.floor(letters.length))];
};

showError = error => {
  alert(error);
};

reset = () => {
  guessLeft = 10;
  userGuesses = [];
  compChoice();
  winsElement();
  lossesElement();
  guessLeftElement();
  userGuessesElement();
};

reset();
document.onkeypress = e => {
  userChoice = e.key.toLowerCase();
  if (!letters.includes(userChoice)) {
    showError(
      'No special characters, you need to pick a letter from the alphabet.'
    );
  } else if (userGuesses.includes(userChoice)) {
    showError('You cannot pick the same letter twice');
  } else {
    userGuesses.push(userChoice);
    guessLeft--;
    guessLeftElement();
  }

  if (randomLetter === userChoice) {
    wins++;
    alert('Way to go! You guessed right');
    reset();
  } else if (guessesLeft === 0) {
    losses++;
    alert('Sorry you ran out of guesses');
    reset();
  }
};
