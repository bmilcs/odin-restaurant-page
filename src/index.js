import { home } from "./modules/home";
import { navBar } from "./modules/navbar";

const mainContainer = document.querySelector("#container");

mainContainer.appendChild(navBar);
mainContainer.appendChild(home);

export { mainContainer };
