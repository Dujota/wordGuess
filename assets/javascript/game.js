// Game Variables

let wins = 0;
let losses = 0;
let guessLeft = 10;
let userGuesses = [];
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

// UI Functions
const winsElement = () => {
  document.getElementById('wins').innerHTML = wins;
};

const lossesElement = () => {
  document.getElementById('losses').innerHTML = losses;
};

const guessLeftElement = () => {
  document.getElementById('guessLeft').innerHTML = guessLeft;
};

const userGuessesElement = () => {
  document.getElementById('userGuess').innerHTML = userGuesses;
};

gameChoice = () => {
  randomChoice =
    letters[Math.floor(Math.random() * Math.floor(letters.length))];
};

reset = () => {
  guessLeft = 10;
  userGuesses = [];
  gameChoice();
  winsElement();
  lossesElement();
};

document.onkeyup = e => {
  userChoice = e.key.toLowerCase();
  console.log(userChoice);
  guessLeft--;
  if (gameChoice() === userChoice) {
    wins++;
  } else {
    losses++;
  }
};
