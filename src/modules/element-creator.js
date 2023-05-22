export const createHtmlElement = (tagName, className) => {
  if ((typeof tagName !== "string") && (tagName instanceof String) ||
      (typeof className !== "string") && (className instanceof String)) {
        throw new Error('tagName or className is not a string!');
  }

  const newElement = document.createElement(tagName);
  newElement.classList.add(className);

  return newElement;
}