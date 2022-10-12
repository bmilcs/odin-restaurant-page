import { createElement } from "./utils/create-element";
import "../scss/global.scss";
import "../scss/footer.scss";
import githubSVG from "../img/github.svg";

const prepareFooter = () => {
  // footer container contains an anchor tag with 2 children: p & svg
  const footerContainer = createElement("div", "footer-container");

  const link = createElement(
    "a",
    "",
    "",
    "",
    "https://github.com/bmilcs/odin-restaurant-page"
  );

  const p = createElement("p", "footer-p", "bmilcs");
  link.appendChild(p);

  // github svg is loaded as raw text, allowing us to inject it
  // directly into the innerHTML of <a> (link)

  link.innerHTML += githubSVG.trim();

  footerContainer.appendChild(link);

  return footerContainer;
};

const footer = prepareFooter();

export { footer };
