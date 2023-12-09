"use strict";

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let playedCards = [];

let number = 0;
let isGame = true;
const cardsField = document.getElementById("cards");
const realCardsField = document.getElementById("real_cards");
const playedCardsField = document.getElementById("played_cards");
const info = document.getElementById("info");
const rel = document.getElementById("reload");

info.innerHTML = "Take the card!";

function shuffle(arr) {
  let rand, temp;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

shuffle(cards);

cardsField.innerHTML = cards;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");

  event.target.appendChild(document.getElementById(data));
  play(cards, data);
}

function showCards(cards) {
  return cards.join(", ");
}

function generateCards(cards, cardsF, s) {
  cardsF.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    cardsF.innerHTML += `<div id="rc_${i}${s}" class="card" draggable="true" ondragstart="drag(event)"><span>${cards[i]}</span></div>`;
  }
}

function newPlay() {
  location.reload();
  return false;
}

function addEventCardList() {
  let card_elements = document.getElementsByClassName("card");
  for (let i = 0; i < card_elements.length; i++) {
    card_elements[i].addEventListener("click", play);
  }
}

function play(cards, elId) {
  if (!isGame) return;
  try {
    if (myMove(elId)) return;
    setTimeout(computerMove, 300);
  } catch (ex) {
    info.innerHTML = ex.message;
  }
}

function removeCard(number) {
  playedCards.push(cards[number]);
  cards.splice(number, 1);
  cardsField.innerHTML = cards;
  generateCards(cards, realCardsField, "");
  generateCards(playedCards, playedCardsField, "p");
  addEventCardList();
}

function myMove(elId) {
  isGame = false;
  let b = false;
  number = Number(elId.substr(3));
  if (number > cards.length || number < 0) {
    throw new Error("Input error! Try again!");
  }
  //   if (checkWin("You ", cards[number])) {
  //     b = true;
  //   } else {
  setTimeout(removeCard.bind(null, number), 200);
  isGame = true;
  // }
  return b;
}

function computerMove() {
  isGame = false;
  let b = false;
  number = Math.floor(Math.random() * cards.length);

  console.log(number);

  let computerCard = document.getElementById(`rc_${number}`);
  console.log(computerCard.id);

  // if (checkWin("I ", cards[number])) {
  //   b = true;
  //   return b;
  // } else {
  setTimeout(removeCard.bind(this, number), 200);
  isGame = true;
  //  }
  return b;
}

window.onload = function () {
  generateCards(cards, realCardsField, "");
  addEventCardList();
  rel.addEventListener("click", newPlay);
};
