export class Map {
  constructor(latitude, longtitude, zoom) {
    this.latitude = latitude;
    this.longtitude = longtitude;
    this.zoom = zoom;
  }
  drawMap() {
    let fromProjection = new OpenLayers.Projection("EPSG:4326");
    let toProjection = new OpenLayers.Projection("EPSG:900913");

    let position = new OpenLayers.LonLat(
      this.longitude,
      this.latitude
    ).transform(fromProjection, toProjection);

    this.map = new OpenLayers.Map("demoMap");
    let mapnik = new OpenLayers.Layer.OSM();
    this.map.addLayer(mapnik);

    this.markers = new OpenLayers.Layer.Markers("Markers");
    this.markers.addMarker(new OpenLayers.Marker(position));
    this.map.addLayer(this.markers);
    this.map.setCenter(position, this.zoom);
  }
  changePosition(position) {
    this.markers.addMarker(new OpenLayers.Marker(position));
    this.map.setCenter(position, this.zoom);
  }
  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2 - lat1); // deg2rad below
    let dLon = deg2rad(lon2 - lon1);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
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
