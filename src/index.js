import { home } from "./modules/home";
import { nav } from "./modules/nav";
import { footer } from "./modules/footer";
import "./scss/index.scss";

const mainContainer = document.querySelector("#container");

mainContainer.appendChild(nav);
mainContainer.appendChild(home);
mainContainer.appendChild(footer);

export { mainContainer };
