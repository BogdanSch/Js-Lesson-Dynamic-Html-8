export class DogsGenerator {
  constructor(dogsArray, dogsContainer) {
    this.dogsArray = dogsArray;
    this.dogsContainer = dogsContainer;
  }
  generateDogs() {
    this.dogsArray.forEach((dog) => {
      const dogElement = document.createElement("div");
      dogElement.id = dog.id;
      dogElement.className = "dog";
      dogElement.draggable = true;
      dogElement.ondragstart = this.drag;
      dogElement.dataset.breed = dog.breed;

      const imgElement = document.createElement("img");
      imgElement.src = dog.imageUrl;
      imgElement.alt = dog.breed;
      imgElement.className = "img-fluid";
      imgElement.draggable = false;

      const pElement = document.createElement("p");
      pElement.textContent = dog.breed;

      dogElement.appendChild(imgElement);
      dogElement.appendChild(pElement);

      this.dogsContainer.appendChild(dogElement);
    });
  }
  drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
}
