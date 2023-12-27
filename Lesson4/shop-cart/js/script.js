"use strict";

const placeOrderButton = document.querySelector(".btn-place-order");
const dropInner = document.querySelector(".cart .cart__inner");

let equivalents = {};

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  const target = event.target;
  const imgElement = target.querySelector("img");

  if (imgElement) {
    const imgUrl = imgElement.src;
    event.dataTransfer.setData("text", [
      target.dataset.productName,
      target.dataset.productPrice,
      target.dataset.productId,
      imgUrl,
    ]);
  }
}

function drop(event) {
  event.preventDefault();
  const arrayData = event.dataTransfer.getData("text").split(",");

  if (arrayData) {
    let productName = arrayData[0];
    let productPrice = arrayData[1];
    let productId = arrayData[2];
    let productImg = arrayData[3];
    let count = countEquivalents(productId);

    if (count === 0) {
      equivalents[productId] = [productPrice, 1];
      dropInner.innerHTML += `
                      <div id="item${productId}" class="card cart__item d-flex align-items-center p-2">
                          <img src="${productImg}" alt="${productName}" class="mr-3">
                          <div class="text-center">
                              <span>${productName}, $${productPrice}</span>
                              <br>
                              <span id="count${productId}">amount: ${countEquivalents(
        productId
      )}</span>
                              <div class="btn-wrap">
                                <button class="db btn btn-danger btn-sm ml-2" onclick="removeItem('${productId}')">Remove</button>
                              </div>
                          </div>
                      </div>`;
    } else {
      equivalents[productId][1] += 1;
      let countFlower = document.getElementById(`count${productId}`);
      countFlower.innerHTML = `amount: ${countEquivalents(productId)}`;
    }
  }
}

function countEquivalents(productId) {
  return equivalents[productId] ? equivalents[productId][1] : 0;
}

function checkout() {
  let total = 0;
  for (const key in equivalents) {
    if (equivalents[key] != undefined) {
      total += equivalents[key][0] * equivalents[key][1];
    }
  }
  alert(`Загальна вартість: $${total}`);
}

function removeItem(productId) {
  let item = document.getElementById(`item${productId}`);
  let count = countEquivalents(productId);

  if (count > 1) {
    equivalents[productId][1]--;
    let countFlower = document.getElementById(`count${productId}`);
    countFlower.innerHTML = `amount: ${countEquivalents(productId)}`;
  } else {
    equivalents[productId] = undefined;
    item.parentNode.removeChild(item);
  }
}

placeOrderButton.addEventListener("click", checkout);
