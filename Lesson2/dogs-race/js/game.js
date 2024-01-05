"use strict";

import { DogsGenerator } from "./dogs-generator.js";

const dogsContainer = document.querySelector(".dogs__container");
const startButton = document.querySelector("#startRace");
const winnerModal = document.querySelector(".winner-modal");
const winnerModalObject = new bootstrap.Modal(winnerModal);

const finishDistance = 130;

const dogsGenerator = new DogsGenerator(dogsContainer);
dogsGenerator.generateDogs(4);
let dogs = document.querySelectorAll(".dog");

startButton.addEventListener("click", () => {
  resetRace();
  dogsGenerator.generateDogs(4);
  dogs = document.querySelectorAll(".dog");
  dogs.forEach((dog) => {
    dog.style.animation = `play-x infinite steps(3), play-y infinite steps(2), move forwards`;
    dog.style.animationDuration = `1s, 1s, ${getRandomSpeed()}s`;
    dog.addEventListener("animationiteration", determineWinner, false);
  });
});

function getRandomSpeed() {
  return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
}

function determineWinner() {
  const winner = Array.from(dogs).find(
    (dog) => parseInt(getComputedStyle(dog).left) <= finishDistance
  );

  if (winner) {
    console.log(`Dog ${winner.dataset.track} wins the race!`);
    winnerModal.querySelector(
      ".modal-body p"
    ).innerHTML = `Dog ${winner.dataset.track} wins the race!`;
    winnerModalObject.show();
    resetDogs();
  }
}

function resetDogs() {
  dogs.forEach((dog) => {
    dog.removeEventListener("animationiteration", determineWinner, false);
    dog.style.animation = "none";
    // dog.style.left = `${finishDistance}px`;
  });
}

function resetRace() {
  dogsContainer.innerHTML = "";
  dogs = [];
}
