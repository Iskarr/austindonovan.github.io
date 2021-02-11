WebFont.load({
  google: {
    families: ["Noto Sans", "Roboto Condensed:400,700"],
  },
  loading: function () {
    console.log("Fonts are being loaded");
  },
  active: function () {
    console.log("Fonts have been rendered");
  },
});
