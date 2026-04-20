// Function to clear the main content of the main content
export const clearMain = () => {
  const app = document.querySelector('#root')
  app.innerHTML = ''
}

// Function til at lave et element med klasser
export const create = (el, classes) => {
  const element = document.createElement(el)
  if (classes) element.className = classes
  return element
}

// Funktion til at hente et element fra DOM'en
export const get = (target) => document.querySelector(target)

// Funktion til at sætte et eller flere element(er) i DOM'en
export const set = (element, target) => {
  if (Array.isArray(element)) {
    element.forEach((el) => target.appendChild(el))
  } else target.appendChild(element)
}
