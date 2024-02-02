export class Image {
  constructor(src, isEdible = false) {
    this.src = `./images/items/${src}`;
    this.isEdible = isEdible;
  }
  render() {
    this.imageElement = document.createElement("img");
    this.imageElement.classList.add("card", "p-2");
    this.imageElement.src = this.src;
    return this.imageElement;
  }
}
