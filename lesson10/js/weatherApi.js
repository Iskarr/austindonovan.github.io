const apiURL =
  "http://api.openweathermap.org/data/2.5/weather?q=preston&appid=284bc15c1ef67f2d185f86a29c1373bd&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //   console.log(jsObject);

    document.getElementById("current-humid").textContent =
      jsObject.main.humidity;
    document.getElementById("current-windSpeed").textContent =
      jsObject.wind.speed;
    const descrip = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById("current-desc").textContent = descrip;

    // handles the wind chill factor
    let T = (document.getElementById("current-temp").textContent = Math.floor(
      jsObject.main.temp
    ));

    let W = (document.getElementById(
      "current-windSpeed"
    ).textContent = Math.ceil(jsObject.wind.speed));
    const wc = 35.74 + 0.6215 * T - 35.75 * W ** 0.16 + 0.4275 * T * W ** 0.16;
    // console.log(wc);
    document.getElementById("current-windChill").textContent = Math.floor(wc);

    // let iconcode = jsObject.weather[0].icon;
    // let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    // document.getElementById("wicon").setAttribute("src", iconurl);

    // const imgSrc =
    //   "https://openweathermap.org/img/w/" + jsObject.weather[1].icon + ".png";

    // console.log(imgSrc);

    // const imagesrc =
    //   "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
    // const desc = jsObject.weather[0].description; // note how we reference the weather array
    // document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    // document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    // document.getElementById("icon").setAttribute("alt", desc);
  });
