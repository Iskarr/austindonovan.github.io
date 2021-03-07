const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    const mainTowns = [towns[1], towns[5], towns[6]];

    for (let i = 0; i < mainTowns.length; i++) {
      // creates card and places prophet name in h2 element
      let card = document.createElement("article");
      let h2 = document.createElement("h2");
      h2.textContent = mainTowns[i].name;
      card.appendChild(h2);
      document.querySelector("div.grid").appendChild(card);

      card.setAttribute("class", "mainTowns");

      // year founded
      let founding = document.createElement("p");
      founding.textContent = "Year Founded: " + mainTowns[i].yearFounded;
      card.appendChild(founding);

      // population
      let population = document.createElement("p");
      population.textContent = "Population: " + mainTowns[i].currentPopulation;
      card.appendChild(population);
      // rainfall average
      let rainfallAvg = document.createElement("p");
      rainfallAvg.textContent =
        "Average Rainfall: " + mainTowns[i].averageRainfall;
      card.appendChild(rainfallAvg);

      // set the town image
      let image = document.createElement("img");
      image.setAttribute("loading", "lazy");
      image.setAttribute("src", mainTowns[i].photo);
      image.setAttribute("alt", mainTowns[i].name);
      card.appendChild(image);
    }
  });
