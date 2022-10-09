import { createElement } from "./utils/create-element";
import "./scss/global.scss";
import "./scss/home.scss";

export const renderHomepage = () => {
  // main container: all of page contents
  const mainContainer = createElement("div", "", "", "container");

  // hero container: call to action section: page title, header, p & button
  const heroContainer = createElement("div", "hero-container");

  // title container: hero title & subtitle
  const titleContainer = createElement("div", "title-container");

  const h1 = createElement("h1", "hero-title", "Burger World");

  const h2 = createElement(
    "h2",
    "hero-subtitle",
    "home of the world's BEST burger"
  );

  const p = createElement(
    "p",
    "hero-p",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
  );

  const button = createElement("button", "hero-btn", "Order Now");

  //
  // final assembly of page elements
  //

  titleContainer.appendChild(h1);
  titleContainer.appendChild(h2);

  heroContainer.appendChild(titleContainer);
  heroContainer.appendChild(p);
  heroContainer.appendChild(button);

  mainContainer.appendChild(heroContainer);

  document.querySelector("body").appendChild(mainContainer);
};
