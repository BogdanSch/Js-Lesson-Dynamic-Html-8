"use strict";

let total = 0;
function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData(
    "text",
    '<img src="http://js.web-online.net.ua/' +
      event.target.id +
      '.jpg" class="mini" />' +
      "," +
      event.target.dataset.text +
      ", " +
      event.target.dataset.price
  );
}
function drop(event) {
  event.preventDefault();
  const drop = document.getElementById("cart");
  const data = event.dataTransfer.getData("text");
  const arrData = data.split(",");
  const sum = document.getElementById("sum");
  total += parseInt(arrData[2]);
  sum.innerHTML = "Сумма: $" + total;
  drop.innerHTML += arrData[0] + arrData[1] + ", $" + parseInt(arrData[2]);
}
