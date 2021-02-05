let currentDay = new Date().getDay();
console.log(currentDay);

if (currentDay == 5) {
  document.getElementById("aside").style.display = "block";
} else {
  document.getElementById("aside").style.display = "none";
}

const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
// long, medium, short
const datefield = document.querySelector("date");
datefield.textContent = fulldate;

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

// Google Map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 42.094553326548684, lng: -111.87548034454372 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
