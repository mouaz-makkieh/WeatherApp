const apiKey = "82005d27a116c2880c8f0fcb866998a0";
let latitude;
let longitude;
const notification = document.getElementsByClassName("notification")[0];

function getLocation() {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {
  console.log(position);
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey
  )
    .then(response => response.json())
    .then(weather => console.log(weather));
}

function onError(error) {
  console.log("sharmota", error);
  const p = document.createElement("p");
  p.innerHTML = error.message;
  notification.style.display = "block";
  notification.appendChild(p);
}

getLocation();
