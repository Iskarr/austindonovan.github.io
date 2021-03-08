const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];

    for (let i = 0; i < prophets.length; i++) {
      // creates card and places prophet name in h2 element
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      h2.textContent = prophets[i].name + " " + prophets[i].lastname;
      card.appendChild(h2);
      document.querySelector("div.cards").appendChild(card);

      // creates a p tag with prophets DOB
      let birthPlace = document.createElement("p");
      birthPlace.textContent = "Place of Birth: " + prophets[i].birthdate;
      card.appendChild(birthPlace);

      // adds birth state
      let birthState = document.createElement("p");
      birthState.textContent = "Birth State: " + prophets[i].birthplace;
      card.appendChild(birthState);

      // creates images for all prophets
      let image = document.createElement("img");
      image.setAttribute("loading", "lazy");
      image.setAttribute("src", prophets[i].imageurl);
      image.setAttribute(
        "alt",
        prophets[i].name +
          " " +
          prophets[i].lastname +
          " - " +
          prophets[i].order
      );
      card.appendChild(image);
    }
  });
