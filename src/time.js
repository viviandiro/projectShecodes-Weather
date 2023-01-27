// fecha y dia actual
let now = new Date();
function formatDate(date) {
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
  /* let formatte = `${newDay} ${hour}:${minut} ${newformat}`;
  return formatte; */
  let fech = document.querySelector("span#fecha");
  fech.innerHTML =
    newDay + " " + hour + ":" + minut + " " + newformat + " <br>";
}
formatDate(now);
