function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");

  if (document.getElementById("stats").style.marginTop == "300px") {
    document.getElementById("stats").style.marginTop = "0px";
  } else {
    document.getElementById("stats").style.marginTop = "300px";
  }
}
