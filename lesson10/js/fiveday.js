const forecastURL =
  "http://api.openweathermap.org/data/2.5/forecast?q=preston&appid=284bc15c1ef67f2d185f86a29c1373bd&units=imperial";

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    // gets the five upcoming days of weather
    let dayOne = jsObject.list[4].main.temp;
    let dayTwo = jsObject.list[12].main.temp;
    let dayThree = jsObject.list[20].main.temp;
    let dayFour = jsObject.list[28].main.temp;
    let dayFive = jsObject.list[36].main.temp;

    // sets the weather to a date
    document.getElementById("data1").innerHTML = dayOne;
    document.getElementById("data2").textContent = dayTwo;
    document.getElementById("data3").textContent = dayThree;
    document.getElementById("data4").textContent = dayFour;
    document.getElementById("data5").textContent = dayFive;

    let dayOneIcon = jsObject.list[4].weather[0].icon;
    let iconURL = "http://openweathermap.org/img/w/" + dayOneIcon + ".png";
    document.getElementById("firstIcon").setAttribute("src", iconURL);

    let dayTwoIcon = jsObject.list[12].weather[0].icon;
    let iconURL2 = "http://openweathermap.org/img/w/" + dayTwoIcon + ".png";
    document.getElementById("secondIcon").setAttribute("src", iconURL2);

    let dayThreeIcon = jsObject.list[20].weather[0].icon;
    let iconURL3 = "http://openweathermap.org/img/w/" + dayThreeIcon + ".png";
    document.getElementById("thirdIcon").setAttribute("src", iconURL3);

    let dayFourIcon = jsObject.list[28].weather[0].icon;
    let iconURL4 = "http://openweathermap.org/img/w/" + dayFourIcon + ".png";
    document.getElementById("fourthIcon").setAttribute("src", iconURL4);

    let dayFiveIcon = jsObject.list[36].weather[0].icon;
    let iconURL5 = "http://openweathermap.org/img/w/" + dayFiveIcon + ".png";
    document.getElementById("fifthIcon").setAttribute("src", iconURL5);

    // const imagesrc =
    //   "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
    // document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    // document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    // document.getElementById("icon").setAttribute("alt", desc);
  });
