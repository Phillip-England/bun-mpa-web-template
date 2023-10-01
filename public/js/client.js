// src/config.ts
var bannerID = "banner";
var bannerBarsIconID = "banner-bars-icon";
var bannerCloseIconID = "banner-x-icon";
var navMenuOverlayID = "nav-menu-overlay";
var navMenuID = "nav-menu";

// src/client.js
var qs = (selector) => {
  let element = document.querySelector(selector);
  return element;
};
var showMany = (elements) => {
  elements.forEach((element) => {
    element.classList.remove("hidden");
  });
};
var hideMany = (elements) => {
  elements.forEach((element) => {
    element.classList.add("hidden");
  });
};
var banner = qs(`#${bannerID}`);
var bannerBarsIcon = qs(`#${bannerBarsIconID}`);
var bannerCloseIcon = qs(`#${bannerCloseIconID}`);
var navMenu = qs(`#${navMenuID}`);
var navMenuOverlay = qs(`#${navMenuOverlayID}`);
var openNavMenu = () => {
  hideMany([bannerBarsIcon]);
  showMany([bannerCloseIcon, navMenu, navMenuOverlay]);
};
var closeNavMenu = () => {
  showMany([bannerBarsIcon]);
  hideMany([bannerCloseIcon, navMenu, navMenuOverlay]);
};
bannerBarsIcon.addEventListener("click", () => {
  openNavMenu();
});
bannerCloseIcon.addEventListener("click", () => {
  closeNavMenu();
});
navMenuOverlay.addEventListener("click", () => {
  closeNavMenu();
});
