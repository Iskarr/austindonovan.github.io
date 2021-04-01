businessAPI =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

imgsURL = "https://picsum.photos/v2/list";

fetch(businessAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    const imageList = jsObject;
    console.log(imageList.business[1].imageurl);
    let num = 0;
    for (let i = 0; i < 9; i++) {
      let imageURLs = imageList[num + 1].imageurl;
      // console.log(imageURLs);

      document.getElementById(`image${num + 1}`).setAttribute("src", imageURLs);
      num++;
      console.log(num);
    }
  });
