//----London------//

function updateLondonTime() {
  let londonElement = document.querySelector("#london");
  let londonDate = londonElement.querySelector(".date");
  let londonTime = londonElement.querySelector(".time");

  let londonTimeElement = moment().tz("Europe/London");
  londonDate.innerHTML = londonTimeElement.format("MMMM Do YYYY");
  londonTime.innerHTML = londonTimeElement.format(
    "h:mm:ss [<small>]A[</small]"
  );
}

setInterval(updateLondonTime, 1000);

//----Warsaw------//

function updateWarsawTime() {
  let warsawElement = document.querySelector("#warsaw");
  let warsawDate = warsawElement.querySelector(".date");
  let warsawTime = warsawElement.querySelector(".time");

  let warsawTimeElement = moment().tz("Europe/Warsaw");
  warsawDate.innerHTML = warsawTimeElement.format("MMMM Do YYYY");
  warsawTime.innerHTML = warsawTimeElement.format(
    "h:mm:ss [<small>]A[</small]"
  );
}

setInterval(updateWarsawTime, 1000);

//----Madrid------//
function updateMadridTime() {
  let madridElement = document.querySelector("#madrid");
  let madridDate = madridElement.querySelector(".date");
  let madridTime = madridElement.querySelector(".time");

  let madridTimeElement = moment().tz("Europe/Warsaw");
  madridDate.innerHTML = madridTimeElement.format("MMMM Do YYYY");
  madridTime.innerHTML = madridTimeElement.format(
    "h:mm:ss [<small>]A[</small]"
  );
}

setInterval(updateMadridTime, 1000);

//----Milan------//
function updateMilanTime() {
  let milanElement = document.querySelector("#milan");
  let milanDate = milanElement.querySelector(".date");
  let milanTime = milanElement.querySelector(".time");

  let milanTimeElement = moment().tz("Europe/Warsaw");
  milanDate.innerHTML = milanTimeElement.format("MMMM Do YYYY");
  milanTime.innerHTML = milanTimeElement.format("h:mm:ss [<small>]A[</small]");
}
setInterval(updateMilanTime, 1000);

//----New-York------//
function updateNewYorkTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDate = newYorkElement.querySelector(".date");
  let newYorkTime = newYorkElement.querySelector(".time");

  let newYorkTimeElement = moment().tz("America/New_York");
  newYorkDate.innerHTML = newYorkTimeElement.format("MMMM Do YYYY");
  newYorkTime.innerHTML = newYorkTimeElement.format(
    "h:mm:ss [<small>]A[</small]"
  );
}

setInterval(updateNewYorkTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
if(cityTimeZone === "current"){
  cityTimeZone = moment.tz.guess()
}

  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.split("/")[1];
  let citiesElement = document.querySelector("#london");
  citiesElement.innerHTML = `
  <div class="cities>
        <div class="flex">
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small>
        </div>
        </div>
        </div>
     `;
}

let selectCitiesElement = document.querySelector("#city");
selectCitiesElement.addEventListener("change", updateCity);
