import "./scss/main.scss";
import { createElement } from "./utils/create-element";

// mainContainer holds page contents
const mainContainer = createElement("div", "", "", "container");

const ctaContainer = createElement("div", "cta-container");
const subHeaderContainer = createElement("div", "sub-header-container");

const h1 = createElement("h1", "header-text", "Burger World");

const h2 = createElement(
  "h2",
  "sub-header-text",
  "home of the world's BEST burger"
);

const p = createElement(
  "p",
  "header-p",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
);

const button = createElement("button", "menu-btn", "Order Now");

// final assembly of page elements
subHeaderContainer.appendChild(h1);
subHeaderContainer.appendChild(h2);
ctaContainer.appendChild(subHeaderContainer);
ctaContainer.appendChild(p);
ctaContainer.appendChild(button);

mainContainer.appendChild(ctaContainer);
document.querySelector("body").appendChild(mainContainer);
