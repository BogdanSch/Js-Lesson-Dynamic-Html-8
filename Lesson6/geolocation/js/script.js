"use strict";

import { Map } from "map.js";

const geoLocationStatus = document.querySelector(".geolocation__info-status");
const mapLink = document.querySelector(".geolocation__info-map");
const locationsDistnaceContainer = document.querySelector(
  ".geolocation__info-distance"
);
const findGeolocationButton = document.querySelector(".btn-geolocation-submit");

let map = new Map(50, 40, 20);

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

    position = new OpenLayers.LonLat(longitude, latitude).transform(
      fromProjection,
      toProjection
    );

    markers.addMarker(new OpenLayers.Marker(position));
    map.setCenter(position, zoom);
  }

  function error() {
    geoLocationStatus.innerHTML = "Неможливо одержати дані геолокації.";
  }

  geoLocationStatus.innerHTML = "Йде пошук...";
  navigator.geolocation.getCurrentPosition(success, error);
}

findGeolocationButton.addEventListener("click", findGeolocation);
