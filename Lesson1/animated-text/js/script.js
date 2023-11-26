"use strict";

const addTextButton = document.querySelector(".btn-add-text");
const clearTextButton = document.querySelector(".btn-clear-text");

let delayTime = 150

addTextButton.addEventListener("click", () => {
  const wordsArray = ["Treasure", "Adventure", "Map", "Discovery"];
  const randomWord = getRandomWord(wordsArray);
  const blockId = addTextButton.getAttribute("data-text-id");
  addText(blockId, randomWord);
});

function getRandomWord(wordsArray) {
  const randomIndex = Math.floor(Math.random() * wordsArray.length);
  return wordsArray[randomIndex];
}

function addText(id, text) {
  const element = document.getElementById(id);

  if (element) {
    element.innerHTML = "";
    let counter = 0;
    let timer;

    function addLetter() {
      const randomColor = getRandomColor();
      const letterSpan = document.createElement("span");
      letterSpan.innerHTML = text[counter];
      letterSpan.style.color = randomColor;
      element.appendChild(letterSpan);

      counter++;

      if (counter >= text.length) {
        clearInterval(timer);
      }
    }

    timer = setInterval(addLetter, delayTime);
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

clearTextButton.addEventListener("click", clearText);

function clearText() {
  let blockId = clearTextButton.getAttribute("data-text-id");
  const element = document.getElementById(blockId);
  if (element) {
    element.innerHTML = "";
  }
}
