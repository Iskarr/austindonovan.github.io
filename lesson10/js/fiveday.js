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

    // sets the day of the weeks for the five day forcast
    function getDayName(dateStr, locale) {
      let date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: "long" });
    }

    let dateStr = jsObject.list[4].dt_txt;
    let dateStr2 = jsObject.list[12].dt_txt;
    let dateStr3 = jsObject.list[20].dt_txt;
    let dateStr4 = jsObject.list[28].dt_txt;
    let dateStr5 = jsObject.list[36].dt_txt;

    let day1 = getDayName(dateStr, "en-EN");
    let day2 = getDayName(dateStr2, "en-EN");
    let day3 = getDayName(dateStr3, "en-EN");
    let day4 = getDayName(dateStr4, "en-EN");
    let day5 = getDayName(dateStr5, "en-EN");

    document.getElementById("dayTitle1").textContent = day1;
    document.getElementById("dayTitle2").textContent = day2;
    document.getElementById("dayTitle3").textContent = day3;
    document.getElementById("dayTitle4").textContent = day4;
    document.getElementById("dayTitle5").textContent = day5;
  });
