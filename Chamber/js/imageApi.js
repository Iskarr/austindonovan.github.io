businessAPI =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

imgsURL = "https://picsum.photos/v2/list";

fetch(businessAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    const people = jsObject["business"];
    let num = 0;

    for (let i = 0; i < people.length; i++) {
      let fullNames = people[i].name + " ";
      let lastNames = people[i].lastname;
      let descriptions = people[i].description;

      console.log(descriptions);
      document
        .getElementById(`image${num + 1}`)
        .setAttribute("src", people[num].imageurl);

      document.getElementById(`fullName${num + 1}`).textContent = fullNames;
      document.getElementById(`lastName${num + 1}`).textContent = lastNames;
      document.getElementById(`descript${num + 1}`).textContent = descriptions;
      num++;
    }

    // let num = 0;
    // for (let i = 0; i < 9; i++) {
    //   let imageURLs = imageList[num + 1].imageurl;
    //   console.log(imageURLs);

    //   document.getElementById(`image${num + 1}`).setAttribute("src", imageURLs);
    //   num++;
    //   console.log(num);
    // }
  });
