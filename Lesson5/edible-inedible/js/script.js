import { EdibleGame } from "./game.js";
import { Image } from "./image.js";

const playButton = document.querySelector("#playButton");
const imagesContainer = document.getElementById("images");
const messageContainer = document.getElementById("message");
const counterContainer = document.getElementById("counter");

const images = [
  new Image("apple.png", true),
  new Image("pear.png", true),
  new Image("scissors.png"),
  new Image("ball.png"),
  new Image("pen.png"),
  new Image("banana.png", true),
  new Image("hammer.png"),
  new Image("tomato.png", true),
  new Image("laptop.png"),
  new Image("strawberry.png", true),
  new Image("notebook.png"),
  new Image("bottle-of-water.png"),
  new Image("baseball.png"),
  new Image("watermelon.png", true),
  new Image("pineapple.png", true),
];

let edibleGame = null;

playButton.addEventListener("click", () => {
  messageContainer.innerHTML = ``;
  counterContainer.innerHTML = ``;

  edibleGame = new EdibleGame(
    images,
    imagesContainer,
    messageContainer,
    counterContainer,
    4,
    1000,
    onGameFinished
  );

  playButton.style = `opacity: 0;`;
  imagesContainer.scrollIntoView();
});

function onGameFinished() {
  playButton.style = `opacity: 1;`;
}
