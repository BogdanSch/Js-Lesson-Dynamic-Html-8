"use strict";

import { Ship } from "./ship.js";
import { Board } from "./board.js";

const gameOptionContainer = document.querySelector("#game-option");
const gameBoardsContainer = document.querySelector("#game-boards");
const rotateButton = document.querySelector("#rotate");

const playerBoard = new Board(gameBoardsContainer, "red", "user");
const botBoard = new Board(gameBoardsContainer, "cyan", "bot");
let ships;
let angle;

function rotate() {
  const optionShips = Array.from(gameOptionContainer.children);

  angle = angle === 0 ? 90 : 0;
  optionShips.forEach((ship) => {
    console.log(ship.className);
    ship.style.transform = `rotate(${angle}deg)`;
  });
}

rotateButton.addEventListener("click", rotate);

function generateBotShips() {
  const ship1 = new Ship("deck-one", 1);
  const ship2 = new Ship("deck-one", 1);
  const ship3 = new Ship("deck-three", 3);
  const ship4 = new Ship("deck-three", 3);
  ships = [ship1, ship2, ship3, ship4];

  ships.forEach((ship) => {
    botBoard.generateShip(ship);
  });
}

generateBotShips();

let draggedShip;

const optionShips = Array.from(gameOptionContainer.children);

optionShips.forEach((optionShip) =>
  optionShip.addEventListener("dragstart", dragStart)
);

const allUserBlocks = document.querySelectorAll("#user div");
allUserBlocks.forEach((userBlock) => {
  userBlock.addEventListener("dragover", dragOver);
  userBlock.addEventListener("drop", dropShip);
});

function dragStart(event) {
  draggedShip = event.target;
}

function dragOver(event) {
  event.preventDefault();
}

function dropShip(event) {
  const startIndex = event.target.id;
  const ship = ships[draggedShip.id];
  const isHorizontal = angle === 0 ? true : false;
  playerBoard.generateShip(ship, startIndex, isHorizontal);
}
