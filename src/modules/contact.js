import { createElement } from "./utils/create-element";
import "../scss/global.scss";
import "../scss/contact.scss";

const prepareContact = () => {
  const contactContainer = createElement("div", "contact-container");

  const contactElements = [
    createElement("h1", "contact-h1", "Contact Us"),
    createElement("h3", "contact-h3", "We want to hear from you."),
    createElement(
      "p",
      "contact-p",
      "How's our food? What did you think of our staff? Was your experience nothing short of excellent?"
    ),
    createElement("h2", "contact-h2", "How are we doing?"),
    createElement("p", "contact-address", "Burger World"),
    createElement("p", "contact-address", "86 Somewhere Rd."),
    createElement("p", "contact-address", "Los Angeles, CA"),
    createElement("p", "contact-address", "90210"),
    createElement("p", "contact-address", "(999) 819-1919"),
  ];

  contactElements.forEach((element) => contactContainer.appendChild(element));

  return contactContainer;
};

const contact = prepareContact();

export { contact };
