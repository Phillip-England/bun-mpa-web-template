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
};
var cemPage = () => {
};
var salesPage = () => {
};
var talentPage = () => {
};
var financePage = () => {
};
var routeFunc = router[window.location.pathname];
routeFunc();
