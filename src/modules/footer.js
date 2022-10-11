import { createElement } from "./utils/create-element";
import "../scss/global.scss";
import "../scss/footer.scss";
import githubSVG from "../img/github.svg";

const prepareFooter = () => {
  const footerContainer = createElement("div", "footer-container");

  const link = createElement(
    "a",
    "",
    "",
    "",
    "https://github.com/bmilcs/odin-restaurant-page"
  );

  // SVG is loaded as raw text, allowing us to inject it
  // directly into the innerHTML of the link tag

  const p = createElement("p", "footer-p", "bmilcs");

  link.appendChild(p);
  link.innerHTML += githubSVG.trim();
  footerContainer.appendChild(link);

  return footerContainer;
};

const footer = prepareFooter();

export { footer };
