
// funcion para mi ubicacion
var city = "Bucaramanga";
let apiKey = "1dbf926d3b4417bf379db7043bec1047";
let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

function showTemperature(response) {
  console.log(response.data);
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#grades");
  temperatureElement.innerHTML = `🌤️ ${temperature}°C`;
  let cityElement = document.querySelector("#newCity");
  cityElement.innerHTML = response.data.name;
  
  
}
axios.get(`${urlApi}&appid=${apiKey}`).then(showTemperature);



function searchCity(city) {
  let apiKey = "1dbf926d3b4417bf379db7043bec1047";
  let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(urlApi).then(showTemperature);

}
function dateCity(event) {
    event.preventDefault();
    let city = document.getElementById("FormControlInput1").value;
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

let myForm = document.querySelector("#searchForm");
myForm.addEventListener("submit", dateCity);

let myButton = document.querySelector("button");
myButton.onclick = dateCity;



// funcion de coordenadas de mi localizacion
function showPosition(position) {
  let cityElement = document.querySelector("#newCity");
  cityElement.innerHTML = city;
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  console.log(city);
  searchCity(city);
}

function getCurrentPosition(){
    navigator.geolocation.getCurrentPosition(showPosition);
}


let myButtonCurrent = document.querySelector("#btn2");
myButtonCurrent.addEventListener("click", getCurrentPosition);

   /*  function temperature() {
      var myfaren = document.getElementById("grades");
      myfaren.innerHTML = "🌤️" + Math.round(dateCity.tempF) + " ";
    }

    function grades() {
      var mygrade = document.getElementById("grades");
      mygrade.innerHTML = "🌤️" + Math.round(dateCity.temp) + " ";
    }

    let faren = document.querySelector("#farenheit");
    faren.addEventListener("onclick", temperature);
    let celsiu = document.getElementById("celsius");
    celsiu.onclick = grades; */