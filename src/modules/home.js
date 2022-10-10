import { createElement } from "./utils/create-element";
import "../scss/global.scss";
import "../scss/home.scss";

const prepareHomepage = () => {
  // home container: title container, p & button
  const homeContainer = createElement("div", "home-container");

  // title container: home title & subtitle
  const titleContainer = createElement("div", "title-container");

  const h1 = createElement("h1", "home-title", "Burger World");

  const h2 = createElement(
    "h2",
    "home-subtitle",
    "home of the world's BEST burger"
  );

  const p = createElement(
    "p",
    "home-p",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
  );

  const button = createElement("button", "home-btn", "Order Now");

  // assemble page elements

  titleContainer.appendChild(h1);
  titleContainer.appendChild(h2);

  homeContainer.appendChild(titleContainer);
  homeContainer.appendChild(p);
  homeContainer.appendChild(button);

  return homeContainer;
};

const home = prepareHomepage();

export { home };
