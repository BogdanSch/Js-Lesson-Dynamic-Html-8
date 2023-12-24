"use strict";

import { Map } from "./map.js";

const geoLocationStatus = document.querySelector(".geolocation__info-status");
const mapLink = document.querySelector(".geolocation__info-link");
const locationsDistnaceContainer = document.querySelector(
  ".geolocation__info-distance"
);
const findGeolocationButton = document.querySelector(".btn-geolocation-submit");
const cityInput = document.querySelector("#cityInput");

const baseCoordinates = { latitude: 50, longtitude: 40 };
let map = new Map(baseCoordinates.latitude, baseCoordinates.longtitude, 20);
map.drawMap();

function findGeolocation() {
  mapLink.href = "";
  mapLink.innerHTML = "";

  function success(coordinates) {
    let latitude = coordinates.latitude;
    let longitude = coordinates.longitude;

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

  try {
    const cityName = cityInput.value.trim();
    let coordinates = getCityCoordinatesByName(cityName);
    success(coordinates);
  } catch (error) {
    error();
  }
}

function getCityCoordinatesByName(cityName) {
  if (cityName.length > 0) {
    switch (cityName) {
      case "Kharkiv":
        return { latitude: 49.98081, longtitude: 36.25272 };
      case "Kyiv":
        return { latitude: 50.4501, longtitude: 30.5234 };
      case "Amsterdam":
        return { latitude: 52.3676, longtitude: 4.9041 };
      case "Lviv":
        return { latitude: 49.8397, longtitude: 24.0297 };
      case "Warszawa":
        return { latitude: 52.2297, longtitude: 21.0122 };
      case "Berlin":
        return { latitude: 52.52, longtitude: 13.405 };
      default:
        throw new Error("Sorry, we don't have any data for this city");
    }
  } else {
    throw new Error("City's name not filled in correctly!");
  }
}

findGeolocationButton.addEventListener("click", findGeolocation);
