"use strict";

import { DogsGenerator } from "./dogs-generator.js";

const checkPlacementButton = document.querySelector(".btn-check-placement");
const exhibitionContainer = document.querySelector(".exhibition-container");
const exhibitionAreas = document.querySelectorAll(".exhibition-area");
const dogsContainer = document.querySelector(".dogs-container");

const dogs = [
  {
    id: "dog1",
    breed: "Labrador",
    imageUrl:
      "https://images.saymedia-content.com/.image/t_share/MjAxMjg4MjkxNjI5MTQ3Njc1/labrador-retriever-guide.jpg",
  },
  {
    id: "dog2",
    breed: "Bulldog",
    imageUrl:
      "https://cdn.britannica.com/07/234207-050-0037B589/English-bulldog-dog.jpg",
  },
  {
    id: "dog3",
    breed: "Beagle",
    imageUrl:
      "https://d128mjo55rz53e.cloudfront.net/media/images/blog-breed-beagle_2.max-400x400.format-jpeg.jpg",
  },
  {
    id: "dog4",
    breed: "Poodle",
    imageUrl:
      "https://cdn.britannica.com/39/233239-050-50C0C3C5/standard-poodle-dog.jpg",
  },
];

const dogsGenerator = new DogsGenerator(dogs, dogsContainer);
dogsGenerator.generateDogs();

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const draggedElementId = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(draggedElementId);

  if (event.target && event.target.classList.contains("exhibition-area")) {
    const exhibitionArea = event.target;
    const exhibitionAreaContainer = exhibitionArea.querySelector(
      ".exhibition-area__container"
    );

    const allowedBreed = exhibitionArea.dataset.allowedBreed;
    const dogBreed = draggedElement.dataset.breed;

    if (allowedBreed === dogBreed) {
      exhibitionAreaContainer.appendChild(draggedElement);
      exhibitionArea.classList.remove("incorrect-placement");
    } else {
      console.log("Incorrect placement!");
      if (exhibitionAreaContainer.children.length !== 1) {
        exhibitionArea.classList.add("incorrect-placement");
      }
    }
  }
}

exhibitionAreas.forEach((exhibitionArea) => {
  exhibitionArea.addEventListener("dragover", allowDrop);
  exhibitionArea.addEventListener("drop", drop);
});
// exhibitionContainer.addEventListener("dragover", allowDrop);
// exhibitionContainer.addEventListener("drop", drop);

function checkPlacement() {
  exhibitionAreas.forEach((area) => {
    if (area.children.length === 1) {
      area.classList.add("incorrect-placement");
    } else {
      area.classList.remove("incorrect-placement");
    }
  });

  const incorrectPlacements = document.querySelectorAll(
    ".exhibition-area.incorrect-placement"
  );
  console.log(incorrectPlacements);

  if (incorrectPlacements.length === 0) {
    alert("Placement is correct! Well done!");
  } else {
    alert("Some dogs are incorrectly placed. Please fix.");
  }
}

checkPlacementButton.addEventListener("click", checkPlacement);
