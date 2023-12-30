// Поточна координата
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function (position) {
	  const current_lat = position.coords.latitude;
	  const current_lng = position.coords.longitude;
	  console.log(current_lat + " " + current_lng);
  
	  // Визначити елемент, до якого буде прив'язана карта
	  const map = L.map("map");
	  // Додати шар із картою
	  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
		attribution:
		  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	  }).addTo(map);
	  // Задати координати першої та другої точки на карті
	  let x1 = 50.00695295;
	  let y1 = 36.2367475;
  
	  // Додати шар із геокодером
	  let control = L.Routing.control(
		L.extend(window.lrmConfig, {
		  waypoints: [L.latLng(x1, y1), L.latLng(current_lat, current_lng)],
		  geocoder: L.Control.Geocoder.nominatim(),
		  routeWhileDragging: true,
		  reverseWaypoints: true,
		  showAlternatives: true,
		  altLineOptions: {
			styles: [
			  { color: "black", opacity: 0.15, weight: 9 },
			  { color: "white", opacity: 0.8, weight: 6 },
			  { color: "blue", opacity: 0.5, weight: 2 },
			],
		  },
		})
	  ).addTo(map);
	  // Повідомляти про помилку
	  L.Routing.errorControl(control).addTo(map);
	});
  }
  // // //--------------Показати широту і довготу в контекстному меню------------
  // let lat, lng;
  // // Визначити значення широти і довготи за положенням мишки на карті
  // map.addEventListener("mousemove", function(ev) {
  //   lat = ev.latlng.lat;
  //   lng = ev.latlng.lng;
  // });
  // // Обробка події натискання на праву кнопку миші (виклик контекстного меню)
  // document.getElementById("map").addEventListener("contextmenu", function(event) {
  //   // Не показувати контекстне меню браузера за замовчуванням
  //   event.preventDefault();
  
  //   // Додати новий маркер, якщо потрібно
  //   // L.marker([lat, lng]).addTo(map);
  //   alert(lat + " - " + lng);
  
  //   return false; // Не показувати спливаюче за замовчуванням вікно
  // });
  