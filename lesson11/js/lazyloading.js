// gets all the images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the InterectionalObserver
const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px",
};

// loads images, on load remove data-src attribute
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));

  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// first check to see if the intersection Observer is supported
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  // loops through each img and check status and load if necessary
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  // just load all images if not supported
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
