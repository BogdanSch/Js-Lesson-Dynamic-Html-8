import { EdibleGame } from "./game.js";
import { Image } from "./image.js";

const imagesContainer = document.getElementById("images");
const messageContainer = document.getElementById("message");
const counterContainer = document.getElementById("counter");

const images = [
  new Image("./images/apple.png", true),
  new Image("./images/pear.png", true),
  new Image("./images/scissors.png"),
  new Image("./images/ball.png"),
  new Image("./images/pen.png"),
  new Image("./images/banana.png", true),
  new Image("./images/hammer.png"),
  new Image("./images/tomato.png", true),
  new Image("./images/laptop.png"),
  new Image("./images/strawberry.png", true),
  new Image("./images/notebook.png"),
  new Image("./images/bottle-of-water.png"),
];

const edibleGame = new EdibleGame(
  images,
  imagesContainer,
  messageContainer,
  counterContainer,
  4,
  1000
);
