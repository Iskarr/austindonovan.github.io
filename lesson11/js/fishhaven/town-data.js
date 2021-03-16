const townURL = `https://byui-cit230.github.io/weather/data/towndata.json`;

fetch(townURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const preston = jsObject;
    // console.log(preston);

    document.getElementById("comingEvent").innerHTML =
      preston.towns[6].events[0];

    for (let i = 0; i < preston.towns[6].events.length; i++) {
      //console.log(preston.towns[6].events.length);
      // creates the elements to render
      let card = document.createElement("article");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let image = document.createElement("img");

      h2.textContent = preston.towns[6].name + " Event:";
      h3.textContent = preston.towns[6].events[i];
      image.setAttribute("loading", "lazy");
      image.setAttribute("src", preston.towns[6].photo);
      image.setAttribute("alt", preston.towns[6].name);

      // allows the dates to show
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(image);
      document.querySelector("div.grid").appendChild(card);
    }
  });
