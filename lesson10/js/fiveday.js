const forecastURL =
  "http://api.openweathermap.org/data/2.5/forecast?q=preston&appid=284bc15c1ef67f2d185f86a29c1373bd&units=imperial";

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const forecasting = jsObject["forcasting"];

    // const imagesrc =
    //   "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
    // document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    // document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    // document.getElementById("icon").setAttribute("alt", desc);
  });
