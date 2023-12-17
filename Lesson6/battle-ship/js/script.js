"use strict";

import { Ship } from "./ship.js";
import { Board } from "./board.js";

const gameOptionContainer = document.querySelector("#game-option");
const gameBoardsContainer = document.querySelector("#game-boards");
const rotateButton = document.querySelector("#rotate");

const playerBoard = new Board(gameBoardsContainer, "red", "user");
const botBoard = new Board(gameBoardsContainer, "cyan", "bot");

function rotate() {
  const optionShips = Array.from(gameOptionContainer.children);

  angle = angle === 0 ? 90 : 0;
  optionShips.forEach((ship) => {
    console.log(ship.className);
    ship.style.transform = `rotate(${angle}deg)`;
  });
}

rotateButton.addEventListener("click", rotate);

let ship1 = new Ship("block-1", 1);
botBoard.generateShip(ship1);
