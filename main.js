//----London------//

setInterval(function () {
  let londonElement = document.querySelector("#london");
  let londonDate = londonElement.querySelector(".date");
  let londonTime = londonElement.querySelector(".time");

  let londonTimeElement = moment().tz("Europe/London");
  londonDate.innerHTML = londonTimeElement.format("MMMM Do YYYY");
  londonTime.innerHTML = londonTimeElement.format(
    "h:mm:ss [<small>]A[</small]"
  );
}, 1000);

//----Warsaw------//
setInterval(function () {
  let warsawElement = document.querySelector("#warsaw");
  let warsawDate = warsawElement.querySelector(".date");
  let warsawTime = warsawElement.querySelector(".time");

  let warsawTimeElement = moment().tz("Europe/Warsaw");
  warsawDate.innerHTML = warsawTimeElement.format("MMMM Do YYYY");
  warsawTime.innerHTML = warsawTimeElement.format(
    "h:mm:ss [<small>]A[</small]"
  );
}, 1000);

//----Madrid------//
setInterval(function () {
  let madridElement = document.querySelector("#madrid");
  let madridDate = madridElement.querySelector(".date");
  let madridTime = madridElement.querySelector(".time");

  let madridTimeElement = moment().tz("Europe/Warsaw");
  madridDate.innerHTML = madridTimeElement.format("MMMM Do YYYY");
  madridTime.innerHTML = madridTimeElement.format(
    "h:mm:ss [<small>]A[</small]"
  );
}, 1000);

//----Milan------//
setInterval(function () {
  let milanElement = document.querySelector("#milan");
  let milanDate = milanElement.querySelector(".date");
  let milanTime = milanElement.querySelector(".time");

  let milanTimeElement = moment().tz("Europe/Warsaw");
  milanDate.innerHTML = milanTimeElement.format("MMMM Do YYYY");
  milanTime.innerHTML = milanTimeElement.format("h:mm:ss [<small>]A[</small]");
}, 1000);
//----New-York------//
setInterval(function () {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDate = newYorkElement.querySelector(".date");
  let newYorkTime = newYorkElement.querySelector(".time");

  let newYorkTimeElement = moment().tz("America/New_York");
  newYorkDate.innerHTML = newYorkTimeElement.format("MMMM Do YYYY");
  newYorkTime.innerHTML = newYorkTimeElement.format(
    "h:mm:ss [<small>]A[</small]"
  );
}, 1000);

//----Tokyo------//

setInterval(function () {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoTime = tokyoElement.querySelector(".time");

  let tokyoTimeElement = moment().tz("Asia/Tokyo");
  tokyoDate.innerHTML = tokyoTimeElement.format("MMMM Do YYYY");
  tokyoTime.innerHTML = tokyoTimeElement.format("h:mm:ss [<small>]A[</small]");
}, 1000);
