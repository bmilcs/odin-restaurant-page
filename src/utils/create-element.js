function createElement(type, classes, content, id) {
  const element = document.createElement(type);

  type === "img" ? (element.alt = content) : (element.textContent = content);

  classes.split(" ").forEach((cls) => element.classList.add(cls));

  if (id) element.id = id;
  return element;
}

export { createElement };
