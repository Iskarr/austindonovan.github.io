const cityAPI =
  "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest";

function addCommas(n) {
  return format(n);
}
fetch(cityAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const cityList = jsObject.data[44];
    console.log(cityList);

    document.getElementById("IDyear").textContent = cityList.Year;
    document.getElementById("population").textContent = cityList.Population;

    // this will get each city from 0-X depending on city amount.
  });
