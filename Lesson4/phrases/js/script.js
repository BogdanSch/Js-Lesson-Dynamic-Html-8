"use strict";

const dropField = document.querySelector(".words");
// const cards = document.querySelectorAll(".cards .card");
const checkButton = document.querySelector("#btn-check");

const phrases = ["This house is so beautiful!"];
const phrase = Math.floor(Math.random() * phrases.length);

function createCards(phrase) {
  const words = phrase.split(" ");
  for (let i = 0; i < words.length; i++) {
    const card = document.createElement("div");
    card.addEventListener("dragstart", drag);
  }
}

const cards = createCards(phrase);

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("word", event.target.textContent);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("word");
  dropField.innerHTML += data + " ";
}

checkButton.addEventListener("click", () => {
  let userPhrase = dropField.innerHTML.trim();
  console.log(userPhrase);
  if (userPhrase === phrase) {
    alert("Goed zo!");
  }
});
