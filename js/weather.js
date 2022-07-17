API_KEY = "3e37a4568a0175d05bdcc262aa11e722";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json())
  .then(data => {
    const weather = document.querySelector(".weather");
    const loaction = document.querySelector(".location");
    const temp = document.querySelector(".temp");
    weather.innerText = data.weather[0].main;
    loaction.innerText = data.name;
    temp.innerText = Math.round(data.main.temp);
  });
}
function onGeoError() {
  alert("위치를 찾을 수 없습니다.");
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);