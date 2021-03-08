const apiURL =
  "http://api.openweathermap.org/data/2.5/weather?q=preston&appid=284bc15c1ef67f2d185f86a29c1373bd&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("current-temp").textContent = jsObject.main.temp;
    document.getElementById("current-humid").textContent =
      jsObject.main.humidity;
    document.getElementById("current-windSpeed").textContent =
      jsObject.wind.speed;
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById("current-desc").textContent = desc;

    let T = (document.getElementById("current-temp").textContent =
      jsObject.main.temp);
    let W = (document.getElementById("current-windSpeed").textContent =
      jsObject.wind.speed);
    const wc = 35.74 + 0.6215 * T - 35.75 * W ** 0.16 + 0.4275 * T * W ** 0.16;
    // console.log(wc);
    document.getElementById("current-windChill").textContent = Math.floor(wc);

    // const imagesrc =
    //   "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
    // document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    // document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    // document.getElementById("icon").setAttribute("alt", desc);
  });
