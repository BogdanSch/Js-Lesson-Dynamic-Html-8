"use strict";

const addTextButton = document.querySelector(".btn-add-text");

addTextButton.addEventListener("click", () => {
  addText("block", "12345678910");
});

function addText(id, text) {
  const element = document.getElementById(id);

  if (element) {
    element.innerHTML = "";
    let counter = 0;
    let timer;

    function addLetter() {
      element.innerHTML += text[counter];
      counter++;

      if (counter >= text.length) {
        clearInterval(timer);
      }
    }

    timer = setInterval(addLetter, 200);
  }
}
