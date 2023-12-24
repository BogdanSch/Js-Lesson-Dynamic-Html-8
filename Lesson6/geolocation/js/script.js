"use strict";

import { Map } from "./map.js";

const geoLocationStatus = document.querySelector(".geolocation__info-status");
const mapLink = document.querySelector(".geolocation__info-link");
const locationsDistnaceContainer = document.querySelector(
  ".geolocation__info-distance"
);
const findGeolocationButton = document.querySelector(".btn-geolocation-submit");
const baseCoordinates = { latitude: 50, longtitude: 40 };
let map = new Map(baseCoordinates.latitude, baseCoordinates.longtitude, 20);
map.drawMap();

function findGeolocation() {
  mapLink.href = "";
  mapLink.innerHTML = "";

  function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    geoLocationStatus.innerHTML = "";
    mapLink.href =
      "https://www.openstreetmap.org/#map=18/" + latitude + "/" + longitude;
    mapLink.innerHTML =
      "Latitude:" + latitude + " °, Longitude: " + longitude + "°";

    map.changePosition(latitude, longitude);

    const distance = map.getDistanceFromLatitudeLongtitudeInKm();
    locationsDistnaceContainer.innerHTML = `Distance: ${distance}km`;
  }

  function error() {
    geoLocationStatus.innerHTML = "Неможливо одержати дані геолокації.";
  }

  geoLocationStatus.innerHTML = "Йде пошук...";
  navigator.geolocation.getCurrentPosition(success, error);
}

findGeolocationButton.addEventListener("click", findGeolocation);
