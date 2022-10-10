import { home } from "./modules/home";
import { nav } from "./modules/nav";

const mainContainer = document.querySelector("#container");

mainContainer.appendChild(nav);
mainContainer.appendChild(home);

export { mainContainer };
