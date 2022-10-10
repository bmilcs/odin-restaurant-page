function createElement(type, classes, textContentOrAlt, id) {
  // minimum requirements: element type
  if (!type) return;

  const element = document.createElement(type);

  // add classes, separated by spaces
  if (classes) classes.split(" ").forEach((cls) => element.classList.add(cls));

  type === "img"
    ? (element.alt = textContentOrAlt)
    : (element.textContent = textContentOrAlt);

  if (id) element.id = id;

  return element;
}

export { createElement };
