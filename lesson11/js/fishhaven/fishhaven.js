const appID = "284bc15c1ef67f2d185f86a29c1373bd";
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?zip=83287,US&appid=${appID}&units=imperial`;

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    let day = 0;
    let weekDay = 0;
    let iconNum = 0;
    const dayofWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let iconsForWeather = [];
    let iconURL = [];

    // loop through each of the forecast days.
    for (let i = 0; i < 40; i++) {
      if (jsObject.list[i].dt_txt.includes("18:00")) {
        // console.log(jsObject.list[i].main.temp);
        document.getElementById(`data${day + 1}`).textContent = Math.floor(
          jsObject.list[i].main.temp
        );
        day++;
      }
    }

    for (let y = 0; y < 40; y++) {
      if (jsObject.list[y].dt_txt.includes("18:00")) {
        let d = new Date(jsObject.list[y].dt_txt);
        document.getElementById(`dayTitle${weekDay + 1}`).textContent =
          dayofWeek[d.getDay()];
        weekDay++;
      }
    }

    for (let x = 0; x < 40; x++) {
      if (jsObject.list[x].dt_txt.includes("18:00")) {
        iconsForWeather[x] = jsObject.list[x].weather[0].icon;

        iconURL[x] =
          "http://openweathermap.org/img/w/" + iconsForWeather[x] + ".png";

        document
          .getElementById(`weatherIcon${iconNum + 1}`)
          .setAttribute("src", iconURL[x]);
        iconNum++;
      }
    }
  });
