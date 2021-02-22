let f;
let windSpeed = document.querySelector("#windSpeed").firstChild.nodeValue;
let temp = document.querySelector("#temp").firstChild.nodeValue;
let hover = document.getElementById("#temp");
let s = 0.16;

function hoverEffect(elem) {
  elem.style.color = "red";
  console.log("You hovered over me!");
}

f =
  35.74 +
  0.6215 * temp -
  35.75 * Math.pow(windSpeed, s) +
  0.4275 * temp * Math.pow(windSpeed, s);

if (temp < 50) {
  f = "N/A";
}

windS = document.getElementById("windChill").innerHTML = Math.floor(f) || "N/A";
