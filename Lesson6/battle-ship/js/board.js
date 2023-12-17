export class Board {
  width = 10;
  angle = 0;
  shipBlocks = [];

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

  generateShip(ship, isHorizontal) {
    const allBoardBlocks = document.querySelectorAll(`#${this.userId} div`);
    let randomStartIndex = Math.floor(Math.random() * allBoardBlocks.length);

    for (let i = 0; i < ship.length; i++) {
      // console.log(allBoardBlocks[randomStartIndex + i]);
      if (isHorizontal) {
        this.shipBlocks.push(allBoardBlocks[randomStartIndex + i]);
      } else {
        this.shipBlocks.push(allBoardBlocks[randomStartIndex + i * this.width]);
      }
      console.log(this.shipBlocks);
    }
  }
}
