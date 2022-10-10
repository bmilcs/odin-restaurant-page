import { createElement } from "./utils/create-element";
import "../scss/global.scss";
import "../scss/menu.scss";

const prepareMenu = () => {
  const menuContainer = createElement("div", "menu-container");
  const h1 = createElement("h1", "header-h1", "Menu");

  menuContainer.appendChild(h1);

  return menuContainer;
};

const menu = prepareMenu();

export { menu };
