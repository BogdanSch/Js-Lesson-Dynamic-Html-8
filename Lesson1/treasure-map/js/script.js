import { Point } from "./point.js";

const maxFoundDistanceDifference = 30;

let map = document.getElementById("map");
let wrap = document.getElementById("wrap");
let coords = document.getElementById("coords");

console.log(map.width);
wrap.style.width = `${map.width}px`;
wrap.style.height = "570px";

let treasure = new Point(
  Math.floor(Math.random() * map.width),
  Math.floor(Math.random() * map.height)
);

function getDistance(userX, userY) {
  let distanceX = Math.abs(treasure.x - userX);
  let distanceY = Math.abs(treasure.y - userY);

  return Math.sqrt(distanceX ** 2 + distanceY ** 2);
}

map.addEventListener("mousemove", (event) => {
  let x = event.offsetX;
  let y = event.offsetY;
  coords.value = `Coords: ${x} : ${y}`;

  let distance = getDistance(x, y);
  if (distance <= maxFoundDistanceDifference) {
    let treasureCircle = document.createElement("div");
    console.log(treasureCircle);
    treasureCircle.className = "circle";
    treasureCircle.style.left = `${treasure.x}px`;
    treasureCircle.style.top = `${treasure.y}px`;
    wrap.appendChild(treasureCircle);
    alert("Скарб знаходиться отут!");
  }
});
