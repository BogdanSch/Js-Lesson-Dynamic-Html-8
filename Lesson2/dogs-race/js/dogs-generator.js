export class DogsGenerator {
  constructor(dogsContainer) {
    this.dogsContainer = dogsContainer;
  }

  generateDogs(numberOfDogs = 1) {
    for (let i = 1; i <= numberOfDogs; i++) {
      const trackContainer = document.createElement("div");
      trackContainer.className = "dog-container";

      const trackNumber = document.createElement("h3");
      trackNumber.textContent = `Track ${i}`;
      trackContainer.appendChild(trackNumber);

      const dog = document.createElement("div");
      dog.className = "dog";
      dog.dataset.track = i;
      trackContainer.appendChild(dog);

      this.dogsContainer.appendChild(trackContainer);
    }
  }
}
