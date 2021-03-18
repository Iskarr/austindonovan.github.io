imgsURL = "https://picsum.photos/v2/list";

fetch(imgsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    const imageList = jsObject;
    let num = 0;
    for (let i = 0; i < 9; i++) {
      let imageURLs = imageList[num + 1].download_url;
      // console.log(imageURLs);

      document.getElementById(`image${num + 1}`).setAttribute("src", imageURLs);
      num++;
      // console.log(num);
    }
  });
