import "../scss/nav.scss";

export const prepareNavBar = () => {
  const navItems = ["home", "menu", "contact"];
  const navContainer = document.createElement("nav");
  const navUL = document.createElement("ul");

  const navigateToPage = (e) => {
    alert(e.target.dataset.page);
  };

  navItems.forEach((navItem) => {
    const li = document.createElement("li");
    li.textContent = navItem;
    li.dataset.page = navItem;
    navUL.appendChild(li);
    navUL.addEventListener("click", navigateToPage);
    return navItem;
  });

  navContainer.appendChild(navUL);
  return navContainer;
};
