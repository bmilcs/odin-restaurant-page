import { createElement } from "./utils/create-element";
import "../scss/global.scss";
import "../scss/contact.scss";

const prepareContact = () => {
  const contactContainer = createElement("div", "contact-container");
  const h1 = createElement("h1", "contact-h1", "Contact Us");

  contactContainer.appendChild(h1);

  return contactContainer;
};

const contact = prepareContact();

export { contact };
