// funcion para mostrar todos los datos obtenidos de mi api

function showTemperature(response) {
  console.log(response.data);
  console.log(response.data.main.temp);
  console.log(response.data.weather[0].description);
  console.log(response.data.dt * 1000 + " prueba");

  let temperatureElement = document.querySelector("#grades");
  let cityElement = document.querySelector("li#newCity");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#hum");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let celsiusTemperature = null;


// funcion donde almacenamos la api para buscar la ciudad y sus datos
function searchCity(city) {
  let apiKey = "1dbf926d3b4417bf379db7043bec1047";
  let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(urlApi).then(showTemperature);
}

// funcion de buscar ciudad
function dateCity(event) {
  event.preventDefault();
  var city = document.querySelector("#FormControlInput1").value;
  city = city.toLowerCase().trim();
  if (city !== "") {
    searchCity(city);
  } else {
    alert(
      "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
        city
    );
  }
}

// funcion convertir a farenheit
function displayFaren(event) {
  event.preventDefault();
  farenElement.classList.remove("active");
  celsiuElement.classList.add("active");
  let temperatureElement = document.querySelector("#grades");
  let farentempElement = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(farentempElement);
}

// funcion de convertir a celsius
function displaycelsiu(event) {
  event.preventDefault();
  farenElement.classList.add("active");
  celsiuElement.classList.remove("active");
  let temperatureElement = document.querySelector("#grades");

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let myForm = document.querySelector("#searchForm");
myForm.addEventListener("submit", dateCity);

let farenElement = document.querySelector("#farenheit");
farenElement.addEventListener("click", displayFaren);
let celsiuElement = document.querySelector("#celsiu");
celsiuElement.addEventListener("click", displaycelsiu);

// funcion de coordenadas de mi localizacion

function showPosition(position) {
  let cityElement = document.querySelector("#newCity");
  cityElement.innerHTML = city;
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  console.log(city);
  searchCity(city);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

/* let myButtonCurrent = document.querySelector("#btn2");
myButtonCurrent.addEventListener("click", getCurrentPosition); */
  

// funcion de hora y dia 
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let newDay = days[date.getDay()];
  let hour = date.getHours();
  let minut = date.getMinutes();
  //formateo de hora en pm y am
  let newformat = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  minut = minut < 10 ? "0" + minut : minut;
  //muestra el dia y la hora
  return  `${newDay} ${hour}:${minut} ${newformat}`;
  
  /* let fech = document.querySelector("li#fech");
  fech.innerHTML =
    newDay + " " + hour + ":" + minut + " " + newformat + " <br>"; 
} */

}
searchCity("Bucaramanga");
