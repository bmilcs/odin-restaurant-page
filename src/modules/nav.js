import { createElement } from "./utils/create-element.js";
import { mainContainer } from "..";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import { footer } from "./footer";
import "../scss/nav.scss";

const prepareNav = () => {
  const navItems = ["home", "menu", "contact"];
  const navContainer = createElement("nav");
  const navUL = createElement("ul");

  // create array of nav elements (li's)

  const navElements = navItems.map((navItem) => {
    const li = createElement("li", "", navItem);
    li.dataset.page = navItem;
    navUL.appendChild(li);
    return li;
  });

  // callback: nav item clicked

  const navigateToPage = (e) => {
    // hide current page
    navContainer.nextSibling.remove();

    // acquire name of page they want to visit
    const navTarget = e.target.dataset.page;

    if (navTarget === "home") mainContainer.insertBefore(home, footer);
    if (navTarget === "menu") mainContainer.insertBefore(menu, footer);
    if (navTarget === "contact") mainContainer.insertBefore(contact, footer);
  };

  // add eventlistener to all nav li elements

  navElements.forEach((element) =>
    element.addEventListener("click", navigateToPage)
  );

  navContainer.appendChild(navUL);
  return navContainer;
};

const nav = prepareNav();

export { nav };
