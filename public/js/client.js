// src/config/dom.ts
var TopBarID = "top-bar";
var bannerXIconID = "banner-x-icon";
var bannerBarsIconID = "banner-bars-icon";
var navMenuID = "nav-menu";
var navOverlayID = "nav-overlay";

// src/client/client.ts
var router = {
  "/": () => {
    loginPage();
  },
  "/vison": () => {
    visionPage();
  },
  "/score/cem": () => {
    cemPage();
  },
  "/score/sales": () => {
    salesPage();
  },
  "/score/talent": () => {
    talentPage();
  },
  "/score/finance": () => {
    financePage();
  }
};
var loginPage = () => {
};
var visionPage = () => {
  const banner = new Banner;
};
var cemPage = () => {
  const banner = new Banner;
};
var salesPage = () => {
  const banner = new Banner;
};
var talentPage = () => {
  const banner = new Banner;
};
var financePage = () => {
  const banner = new Banner;
};

class Banner {
  topBar;
  x;
  bars;
  menu;
  overlay;
  constructor() {
    this.topBar = document.getElementById(TopBarID);
    this.x = document.getElementById(bannerXIconID);
    this.bars = document.getElementById(bannerBarsIconID);
    this.menu = document.getElementById(navMenuID);
    this.overlay = document.getElementById(navOverlayID);
    this.hook();
  }
  hook = () => {
    this.x.addEventListener("click", () => {
      this.close();
    });
    this.bars.addEventListener("click", () => {
      this.open();
    });
    this.overlay.addEventListener("click", () => {
      this.close();
    });
  };
  open = () => {
    this.x.classList.remove("hidden");
    this.bars.classList.add("hidden");
    this.menu.classList.remove("hidden");
    this.overlay.classList.remove("hidden");
  };
  close = () => {
    this.x.classList.add("hidden");
    this.bars.classList.remove("hidden");
    this.menu.classList.add("hidden");
    this.overlay.classList.add("hidden");
  };
}
var routeFunc = router[window.location.pathname];
routeFunc();
