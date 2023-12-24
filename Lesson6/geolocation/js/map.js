export class Map {
  constructor(latitude, longtitude, zoom) {
    this.latitude = latitude;
    this.longtitude = longtitude;
    this.zoom = zoom;
  }
  drawMap() {
    this.fromProjection = new OpenLayers.Projection("EPSG:4326");
    this.toProjection = new OpenLayers.Projection("EPSG:900913");

    let position = new OpenLayers.LonLat(
      this.longtitude,
      this.latitude
    ).transform(this.fromProjection, this.toProjection);

    this.map = new OpenLayers.Map("demoMap");
    let mapnik = new OpenLayers.Layer.OSM();
    this.map.addLayer(mapnik);

    this.markers = new OpenLayers.Layer.Markers("Markers");
    this.markers.addMarker(new OpenLayers.Marker(position));
    this.map.addLayer(this.markers);
    this.map.setCenter(position, this.zoom);
  }
  changePosition(latitude, longtitude) {
    this.latitude = latitude;
    this.longtitude = longtitude;

    let position = new OpenLayers.LonLat(
      this.longtitude,
      this.latitude
    ).transform(this.fromProjection, this.toProjection);
    this.markers.addMarker(new OpenLayers.Marker(position));
    this.map.setCenter(position, this.zoom);
  }
  getDistanceFromLatitudeLongtitudeInKm(baseLatitude, baseLongtitude) {
    let R = 6371;
    let dLat = this.deg2rad(baseLatitude - this.latitude);
    let dLon = this.deg2rad(baseLongtitude - this.longtitude);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(this.latitude)) *
        Math.cos(this.deg2rad(baseLatitude)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
}
