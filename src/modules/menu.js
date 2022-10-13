import { createElement } from "./utils/create-element";
import "../scss/global.scss";
import "../scss/menu.scss";

class MenuItem {
  constructor(name, price, ingredients) {
    this.name = name;
    this.price = `\$${price}`;
    this.ingredients = ingredients;

    // creates html elements on instantiation
    this.html = this.getHTML();
  }

  getHTML() {
    const menuItemContainer = createElement("div", "menu-item");

    const menuItemElements = [
      createElement("h2", "menu-item-name", this.name),
      createElement("p", "menu-item-ingredients", this.ingredients),
      createElement("h3", "menu-item-price", this.price),
    ];

    menuItemElements.forEach((ele) => menuItemContainer.appendChild(ele));

    return menuItemContainer;
  }
}

const prepMenuItemContainers = () => {
  const menuSelections = [];

  // add MenuItem objects to the menuSelections array
  menuSelections.push(
    new MenuItem(
      "Maynard James Keenan",
      20.49,
      "Two beef patties, American cheese, lettuce, tomato, mayo, pickles, sauteed mushrooms, sauteed onions & bacon"
    ),
    new MenuItem(
      "Swiss Bliss",
      17.99,
      "Quarter lb. beef patty, sauteed mushrooms, three varieties of Swiss cheese & our signature sauce"
    ),
    new MenuItem(
      "Southern Sunrise",
      19.99,
      "Beef patty, pepperjack cheese, onion rings, lettuce, jalepeno, fried egg & bacon sriracha aioli"
    ),
    new MenuItem(
      "Death By Keto",
      29.99,
      "Bacon & sausage mix between two beef patties, lettuce, cheddar cheese & mayo"
    ),
    new MenuItem(
      "Americana",
      14.99,
      "Beef patty, American cheese, bacon, lettuce, tomato, pickles & mayo"
    ),
    new MenuItem(
      "Juicy Lucy",
      18.99,
      "Beef patty stuffed with cheddar cheese, pickled slaw & fried shallots"
    ),
    new MenuItem(
      "Fancy Pants",
      34.99,
      "Ragu beef patty stuffed with goat cheese, topped with fried lobster & fresh parsley"
    ),
    new MenuItem(
      "Nacho Average Burger",
      19.99,
      "Beef patty, melted Mexican cheese blend, salsa & tortilla chips"
    )
  );

  // @return: a new array of dom-ready menu item div containers
  //          ex: array[0] = container > h1 + h2 + p
  return menuSelections.reduce((array, menuItemObj) => {
    return [...array, menuItemObj.html];
  }, []);
};

const prepareMenu = () => {
  const menuContainer = createElement("div", "menu-container");

  const menuHeaderContainer = createElement("div", "menu-title-container");

  const menuHeaderElements = [
    createElement("h1", "menu-h1", "Menu"),
    createElement(
      "p",
      "menu-p",
      "All burgers come with a french fries and a beverage of your choice."
    ),
  ];

  menuHeaderElements.forEach((ele) => menuHeaderContainer.appendChild(ele));

  const menuElements = [menuHeaderContainer, ...prepMenuItemContainers()];

  menuElements.forEach((ele) => menuContainer.appendChild(ele));

  return menuContainer;
};

const menu = prepareMenu();

export { menu };
