"use strict";

const checkPlacementButton = document.querySelector(".btn-check-placement");
const exhibitionContainer = document.querySelector(".exhibition-container");
const exhibitionAreas = document.querySelectorAll(".exhibition-area");

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const draggedElementId = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(draggedElementId);
  const exhibitionArea = event.target;

  if (
    exhibitionContainer.contains(draggedElement) &&
    exhibitionArea.classList.contains("exhibition-area")
  ) {
    const allowedBreed = exhibitionArea.dataset.allowedBreed;
    const dogBreed = draggedElement.dataset.breed;

    if (allowedBreed === dogBreed) {
      exhibitionArea.appendChild(draggedElement);
      exhibitionArea.classList.remove("incorrect-placement");
    } else {
      exhibitionArea.classList.add("incorrect-placement");
    }
  }
}

function checkPlacement() {
  exhibitionAreas.forEach((area) => {
    if (area.children.length === 0) {
      area.classList.add("incorrect-placement");
    } else {
      area.classList.remove("incorrect-placement");
    }
  });

  const incorrectPlacements = document.querySelectorAll(".incorrect-placement");

  if (incorrectPlacements.length === 0) {
    alert("Placement is correct! Well done!");
  } else {
    alert("Some dogs are incorrectly placed. Please fix.");
  }
}
