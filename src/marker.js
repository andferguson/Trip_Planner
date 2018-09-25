const mapboxgl = require("mapbox-gl");

function buildMarker(type, location) {
  const marker = document.createElement('div');
  marker.style.width = "32px";
  marker.style.height = '39px';
  if(type === 'activity') {
    marker.style.backgroundImage = "url(../public/images/activity.png)";
  } else if(type === 'hotel') {
    marker.style.backgroundImage = "url(../public/images/hotel.png)";
  } else if(type === 'restaurant') {
    marker.style.backgroundImage = "url(../public/images/restaurant.png)";
  }
  return new mapboxgl.Marker(marker).setLngLat(location);
}

module.exports = buildMarker
