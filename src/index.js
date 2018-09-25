const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoiZGFuaWVsZWltZXIxIiwiYSI6ImNqbWk0eW1qaTAweTUza3BzeGdkbnBocG0ifQ.zbjB9Frr4-Sfbtd33wkGWA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markers = [];
markers.push(buildMarker("activity", [-87.6354, 41.8785]))
markers.push(buildMarker("hotel", [-87.6354, 41.8685]))
markers.push(buildMarker("restaurant", [-87.6354, 41.8585]))

markers.forEach((marker) => {
  marker.addTo(map);
})
