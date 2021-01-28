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
