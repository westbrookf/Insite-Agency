function initMap() {
  // The location of Uluru
  var uluru = { lat: 38.603184, lng: -90.2482541 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("locMap"), {
    zoom: 8,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
