export class EdibleGame {
  constructor(
    images,
    imagesContainer,
    messageContainer,
    counterContainer,
    imagesToShowCount,
    intervalSpeed,
    onGameFinished
  ) {
    this.images = images;
    this.imagesContainer = imagesContainer;
    this.messageContainer = messageContainer;
    this.counterContainer = counterContainer;
    this.imagesToShowCount = imagesToShowCount;
    this.intervalSpeed = intervalSpeed;
    this.onGameFinished = onGameFinished;

    this.maxEdibleCount = 12;
    this.edibleCount = 0;
    this.gameOver = false;

    this.createImages();
    this.interval = setInterval(() => this.createImages(), intervalSpeed);
    this.counterContainer.innerHTML = `Score: 0`;
  }

  createImages() {
    this.imagesContainer.innerHTML = "";
    this.shuffledImages = this.shuffleArray(this.images);

    for (let i = 0; i < this.imagesToShowCount; i++) {
      let image = this.shuffledImages[i];
      let imageElement = image.render();
      imageElement.addEventListener("click", () => this.handleClick(image));
      this.imagesContainer.appendChild(imageElement);
    }
  }

  handleClick(image) {
    if (!this.gameOver) {
      if (image.isEdible) {
        this.edibleCount++;
        this.counterContainer.innerHTML = `Score: ${this.edibleCount}`;
        if (this.edibleCount === this.maxEdibleCount) {
          this.endGame("Ви виграли!");
        }
        this.intervalSpeed = Math.max(100, this.intervalSpeed - 50);
      } else {
        this.endGame("Ви програли!");
      }
    }
  }

  endGame(message) {
    clearInterval(this.interval);
    this.messageContainer.textContent = message;
    this.onGameFinished();
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
