import "./scss/main.scss";
import { createElement } from "./utils/create-element";
import burgerJpg from "./img/burger.jpg";

const mainContainer = createElement("div", "", "", "container");

const headerContainer = createElement("div", "header-container");
const subHeaderContainer = createElement("div", "sub-header-container");
const h1 = createElement("h1", "header-text", "Burger World");
const h2 = createElement(
  "h2",
  "sub-header-text",
  "home of the world's BEST burger"
);

const p = createElement(
  "p",
  "sub-heading",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
);
const button = createElement("button", "menu-btn", "View Our Menu");

const burgerImg = createElement("img", "main-image", "Burger Image");
burgerImg.src = burgerJpg;

subHeaderContainer.appendChild(h1);
subHeaderContainer.appendChild(h2);
headerContainer.appendChild(subHeaderContainer);
headerContainer.appendChild(p);
headerContainer.appendChild(button);

mainContainer.appendChild(headerContainer);
document.querySelector("body").appendChild(mainContainer);
