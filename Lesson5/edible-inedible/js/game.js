export class EdibleGame {
  constructor(
    images,
    imagesContainer,
    messageContainer,
    counterContainer,
    imagesToShowCount,
    intervalSpeed
  ) {
    this.images = images;
    this.imagesContainer = imagesContainer;
    this.messageContainer = messageContainer;
    this.counterContainer = counterContainer;
    this.imagesToShowCount = imagesToShowCount;
    this.intervalSpeed = intervalSpeed;

    this.edibleCount = 0;

    this.createImages();
    this.interval = setInterval(() => this.createImages(), intervalSpeed);
  }

  createImages() {
    this.imagesContainer.innerHTML = "";
    this.shuffledImages = this.shuffleArray(this.images);

    for (let i = 0; i < this.imagesToShowCount; i++) {
      let image = this.shuffledImages[i];
      const imgElement = document.createElement("img");
      imgElement.src = image.src;
      imgElement.addEventListener("click", () => this.handleClick(image));
      this.imagesContainer.appendChild(imgElement);
    }
  }

  handleClick(image) {
    if (image.isEdible) {
      this.edibleCount++;
      this.counterContainer.innerHTML = `Counter: ${this.edibleCount}`;
      if (this.edibleCount === this.shuffledImages.length) {
        this.endGame("Ви виграли!");
      }
      this.intervalSpeed = Math.max(100, this.intervalSpeed - 50);
    } else {
      this.endGame("Ви програли!");
    }
  }

  endGame(message) {
    clearInterval(this.interval);
    this.messageContainer.textContent = message;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
