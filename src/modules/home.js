import { createElement } from "./utils/create-element";
import "../scss/global.scss";
import "../scss/home.scss";

const prepareHomepage = () => {
  // home container
  const homeContainer = createElement("div", "home-container");

  // title container: burger world & best burger h1/h2
  const titleContainer = createElement("div", "title-container");

  const titleElements = [
    createElement("h1", "home-title", "Burger World"),
    createElement("h2", "home-subtitle", "home of the world's BEST burger"),
  ];

  titleElements.forEach((ele) => titleContainer.appendChild(ele));

  const homeElements = [
    titleContainer,
    createElement(
      "p",
      "home-p",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
    ),
    createElement("button", "home-btn", "Order Now"),
  ];

  homeElements.forEach((ele) => homeContainer.appendChild(ele));

  return homeContainer;
};

const home = prepareHomepage();

export { home };
