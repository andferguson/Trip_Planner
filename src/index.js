const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiZGFuaWVsZWltZXIxIiwiYSI6ImNqbWk0eW1qaTAweTUza3BzeGdkbnBocG0ifQ.zbjB9Frr4-Sfbtd33wkGWA";

const marker = document.createElement('div');
// const mapEl = document.getElementById('map');
// marker.id = 'marker1';
// marker.classList = 'marker';
// document.body.appendChild(marker)
marker.style.width = "32px";
marker.style.height = '39px';
marker.style.backgroundImage = "url(../public/WbMOfMl.png)";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

new mapboxgl.Marker(marker).setLngLat([-87.6354, 41.8885]).addTo(map);
