import { prepareHomepage } from "./modules/home";
import { prepareNavBar } from "./modules/navbar";

const renderSite = () => {
  const mainContainer = document.querySelector("#container");

  // homepage
  const home = prepareHomepage();
  const nav = prepareNavBar();

  mainContainer.appendChild(nav);
  mainContainer.appendChild(home);
};

renderSite();
