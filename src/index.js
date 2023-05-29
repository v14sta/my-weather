//ch1
function formatDate(dates) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date();
  let currentDay = days[date.getDay()];
  let currentHoure = date.getHours();
  if (currentHoure < 10) {
    currentHoure = `0${currentHoure}`;
  }
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let todaysDate = ` ${currentDay} ${currentHoure}:${currentMinutes}`;
  return todaysDate;
}
let weekdate = document.querySelector("#week");
weekdate.innerHTML = formatDate();
//ch2

function searchCity(event) {
  event.preventDefault();
  let searchButton = document.querySelector("#city");
  let h1 = document.querySelector("#show-city");
  h1.innerHTML = `${searchButton.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

//bonus

function celsious(event) {
  event.preventDefault();
  let tempCel = document.querySelector("#cityLink");
  tempCel.innerHTML = 21;
}

function Fahrenheit(event) {
  event.preventDefault();
  let tempFar = document.querySelector("#cityLink");
  let temperature = tempFar.innerHTML;
  tempFar.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let fahr = document.querySelector("#Fahrenheit");
fahr.addEventListener("click", Fahrenheit);

let cels = document.querySelector("#celsious");
cels.addEventListener("click", celsious);
