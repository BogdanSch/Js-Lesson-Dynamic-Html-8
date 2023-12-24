export class Board {
  width = 10;
  angle = 0;

  constructor(gameBoardsContainer, color, userId) {
    this.gameBoardsContainer = gameBoardsContainer;
    this.userId = userId;
    this.color = color;
    this.createBoard();
  }

  createBoard() {
    this.newGameBoardContainer = document.createElement("div");
    this.newGameBoardContainer.classList.add("game-board");
    this.newGameBoardContainer.style.background = this.color;
    this.newGameBoardContainer.id = this.userId;
    this.gameBoardsContainer.appendChild(this.newGameBoardContainer);
    this.createBlocks(this.newGameBoardContainer);
  }

  createBlocks(board) {
    for (let i = 0; i < this.width * this.width; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.id = `block-${i}`;
      board.appendChild(block);
    }
  }

  generateShip(ship, startPosition = 0, isHorizontal = Math.random() < 0.5) {
    const allBoardBlocks = document.querySelectorAll(`#${this.userId} div`);
    let randomStartIndex = Math.floor(Math.random() * allBoardBlocks.length);
    let shipBlocks = [];
    let startIndex = startPosition ? startPosition.substr(6) : randomStartIndex;

    let validStart = isHorizontal
      ? startIndex <= this.width * this.width - ship.length
        ? startIndex
        : this.width * this.width - ship.length
      : startIndex <= this.width * this.width - this.width * ship.length
      ? startIndex
      : this.width * this.width - this.width * ship.length;

    console.log(`Start: ${validStart}, isHorizontal: ${isHorizontal}`);

    for (let i = 0; i < ship.length; i++) {
      let blockIndex = 0;
      if (isHorizontal) {
        blockIndex = validStart + i;
        shipBlocks.push(allBoardBlocks[blockIndex]);
      } else {
        blockIndex = validStart + i * this.width;
        shipBlocks.push(allBoardBlocks[blockIndex]);
      }
    }
    const notTaken = shipBlocks.every(
      (shipBlocks) => !shipBlocks.classList.contains("taken")
    );

    if (notTaken) {
      shipBlocks.forEach((shipBlock) => {
        shipBlock.classList.add(ship.name);
        shipBlock.classList.add("taken");
      });
    } else {
      this.generateShip(ship, startPosition, isHorizontal);
    }
    // console.log(shipBlocks);
  }
}
