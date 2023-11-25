let treasure = {
  x: 100,
  y: 200,
};

const foundDistanceDifference = 200;

let map = document.getElementById("map");
let wrap = document.getElementById("wrap");

let coords = document.getElementById("coords");

console.log(map.width);
wrap.style.width = `${map.width}px`;
wrap.style.height = "570px";

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
  if (distance <= foundDistanceDifference) {
    let treasureCircle = document.createElement("div");
    treasureCircle.className = "circle";
    // treasureCircle.classList.add("circle-1");
    wrap.appendChild(treasureCircle);
    alert("Скарб знаходиться отут!");
  }
});
