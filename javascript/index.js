//London
function updateLondonTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");

  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  londonTimeElement.innerHTML = `${londonTime.format(
    "h:mm:ss"
  )} <small>${londonTime.format("A")}`;
}

setInterval(updateLondonTime, 1000);

//Berlin
function updateBerlinTime() {
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");

  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  berlinTimeElement.innerHTML = `${berlinTime.format(
    "h:mm:ss"
  )} <small>${berlinTime.format("A")}`;
}

setInterval(updateBerlinTime, 1000);

//Tokyo
function updateTokyoTime() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    "h:mm:ss"
  )} <small>${tokyoTime.format("A")}`;
}

setInterval(updateTokyoTime, 1000);

//New York
function updateNewYorkTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");

  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  newYorkTimeElement.innerHTML = `${newYorkTime.format(
    "h:mm:ss"
  )} <small>${newYorkTime.format("A")}`;
}

setInterval(updateNewYorkTime, 1000);

//Melbourne
function updateMelbourneTime() {
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");

  let melbourneTime = moment().tz("Australia/Melbourne");

  melbourneDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  melbourneTimeElement.innerHTML = `${melbourneTime.format(
    "h:mm:ss"
  )} <small>${melbourneTime.format("A")}`;
}

setInterval(updateMelbourneTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace(`_`, " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss")}
        <small>${cityTime.format("A")}</small>
        
      </div>
         
    </div>

  `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
