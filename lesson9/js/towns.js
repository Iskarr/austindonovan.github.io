const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {
      // creates card and places prophet name in h2 element
      let card = document.createElement("article");
      let h2 = document.createElement("h2");
      h2.textContent = towns[i].name;
      card.appendChild(h2);
      document.querySelector("div.grid").appendChild(card);

      // year founded
      let founding = document.createElement("p");
      founding.textContent = "Year Founded: " + towns[i].yearFounded;
      card.appendChild(founding);

      // population
      let population = document.createElement("p");
      population.textContent = "Population: " + towns[i].currentPopulation;
      card.appendChild(population);
      // rainfall average
      let rainfallAvg = document.createElement("p");
      rainfallAvg.textContent = "Average Rainfall: " + towns[i].averageRainfall;
      card.appendChild(rainfallAvg);

      // set the town image
      let image = document.createElement("img");
      image.setAttribute("loading", "lazy");
      image.setAttribute("src", towns[i].photo);
      image.setAttribute("alt", towns[i].name);
      card.appendChild(image);
    }
  });
