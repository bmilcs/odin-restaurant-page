import "./scss/main.css";
import { createElement } from "./utils/create-element";
import burgerJpg from "./img/burger.jpg";

const container = createElement("div", "container");
const header = createElement("h1", "header-text", "Burger World");
const burgerImg = createElement("img", "main-image", "Burger Image");
burgerImg.src = burgerJpg;

container.appendChild(header);
document.querySelector("body").appendChild(container);
