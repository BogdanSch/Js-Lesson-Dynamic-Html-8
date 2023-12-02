"use strict";

const answerContainer = document.getElementById("answerContainer");
const attemptsContainer = document.getElementById("attemptsContainer");
const usedLettersContainer = document.getElementById("usedLettersContainer");
const countCorrectWordsContainer = document.getElementById("countCorrectWords");
const countRemainWordsContainer = document.getElementById("countRemainWords");
const incorrectGuessesContainer = document.getElementById("countRemainWords");

const startGameButton = document.getElementById("startGameButton");
const guessButton = document.getElementById("guessButton");
const inputLetter = document.getElementById("inputLetter");

const wordsArray = ["прокрастинація", "отаман", "козак"];
let randomWord;
let remainLetters;
let attempts = 4;
let answer = [];
let incorrectGuesses = [];

function clearWord(randomWord) {
  answer[0] = randomWord[0];
  answer[randomWord.length - 1] = randomWord[randomWord.length - 1];

  for (let i = 1; i < randomWord.length - 1; i++) {
    answer[i] = "_";
  }
}

function displayWord() {
  answerContainer.innerHTML = answer.join(" ");
  attemptsContainer.innerHTML = `Attempts left: ${attempts}`;
  countCorrectWordsContainer.innerHTML = `Count correct guesses: ${
    randomWord.length - remainLetters
  }`;
  countRemainWordsContainer.innerHTML = `Remain letters: ${remainLetters}`;
  incorrectGuessesContainer.innerHTML = incorrectGuesses.join(", ");
}

function playerGuess(randomWord) {
  let guess = inputLetter.value;

  if (guess.length === 1) {
    let guessed = false;
    for (let i = 0; i < randomWord.length; i++) {
      if (guess === randomWord[i]) {
        guessed = true;
        console.log(guessed);
        answer[i] = randomWord[i];
        remainLetters--;
      }
    }
    if (!guessed) {
      console.log(!guessed);
      attempts--;
      incorrectGuesses.push(guess);
    }
    inputLetter.value = "";
    displayWord();

    if (remainLetters === 0) {
      alert("Congratulations! You've guessed the word!");
    } else if (attempts === 0) {
      alert(
        `Sorry, you've run out of attempts. The correct word was: ${randomWord}`
      );
    }
  } else {
    alert("Please try again!");
  }
}

startGameButton.addEventListener("click", () => {
  randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  remainLetters = randomWord.length - 2;
  attempts = 4;
  answer = [];
  incorrectGuesses = [];

  clearWord(randomWord);
  displayWord();

  guessButton.addEventListener("click", () => {
    playerGuess(randomWord);
  });
});
