"use strict";

let intervalId;

let count = 0;
let time = 1000;
let startTime = new Date().getTime();

let leftOffset = 0;
let topOffset = 0;
let directionX = 1;
let directionY = 1;

const maxScreenWidth = 1000;
const maxScreenHeight = 500;
const maxSpeed = 10;
const gameTime = 30 * 1000;

const box = document.getElementById("box");
const gameOverModal = new bootstrap.Modal(
  document.getElementById("gameOverModal")
);
const congradulationsModal = new bootstrap.Modal(
  document.getElementById("congradulationsModal")
);

function moveBox() {
  box.style.left = leftOffset + "px";
  box.style.top = topOffset + "px";

  if (leftOffset + box.style.width > maxScreenHeight) {
    directionX *= -1;
  } else if (leftOffset - box.style.width < 0) {
    directionX *= -1;
  }
  if (topOffset + box.style.height > maxScreenHeight) {
    directionY *= -1;
  } else if (topOffset - box.style.height < 0) {
    directionY *= -1;
  }

  if (count >= 10) {
    clearInterval(intervalId);
    showCongradulationsModal();
  }

  if (new Date().getTime() - startTime > gameTime) {
    clearInterval(intervalId);
    showGameOverModal();
  }

  leftOffset += Math.random() * maxSpeed * directionX;
  topOffset += Math.random() * maxSpeed * directionY;
}

function changeSpeed() {
  time = time / 2;
  count++;
  box.innerHTML = `Clicks: ${count}`;
  clearInterval(intervalId);
  intervalId = setInterval(moveBox, time);
}

function showCongradulationsModal() {
  congradulationsModal.show();
}

function showGameOverModal() {
  gameOverModal.show();
  document
    .getElementById("congradulationsModal")
    .querySelector(".modal-clicks").innerHTML = `Clicks ${count}`;
}

intervalId = setInterval(moveBox, time);
box.addEventListener("click", changeSpeed);
