let f;
let windSpeed = document.querySelector("#current-windSpeed").value;
let temp = document.querySelector("#current-temp").value;
let hover = document.getElementById("#current-temp");
let s = 0.16;

function hoverEffect(elem) {
  elem.style.color = "red";
  console.log("You hovered over me!");
}

f = (35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * windSpeed) ^ 0.16;

if (temp > 10) {
  f = "N/A";
}

windS = document.getElementById("windChill").innerHTML = Math.floor(f) || "N/A";

// const T = document.getElementById("current-temp");
// const W = document.getElementById("current-windSpeed");

// NWS Formulat https://www.weather.gov/media/epz/wxcalc/windChill.pdf
const wc = 35.74 + 0.6215 * T - 35.75 * W ** 0.16 + 0.4275 * T * W ** 0.16;

console.log(wc);
