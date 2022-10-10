import "../scss/nav.scss";
import { home } from "./home";
import { mainContainer } from "..";

const prepareNavBar = () => {
  const navItems = ["home", "menu", "contact"];
  const navContainer = document.createElement("nav");
  const navUL = document.createElement("ul");

  // create array of nav elements
  const navElements = navItems.map((navItem) => {
    const li = document.createElement("li");
    li.textContent = navItem;
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

    if (navTarget === "home") mainContainer.appendChild(home);
    // else if (navTarget === "menu") mainContainer.appendChild(menu);
  };

  // add eventlistener to all elements
  navElements.forEach((element) =>
    element.addEventListener("click", navigateToPage)
  );

  navContainer.appendChild(navUL);
  return navContainer;
};

const navBar = prepareNavBar();

export { navBar };
