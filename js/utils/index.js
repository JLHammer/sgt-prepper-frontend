// Utility fil med forskellige hjælpefunktioner

/**
 * Funktion til at slette indhold i root element
 */
export const clearMain = () => {
  const app = document.querySelector('#root')
  app.innerHTML = ''
}

// Funktion til at formatere pris i DKK
export const price2Dkk = (value) => {
  return new Intl.NumberFormat('da-DK', {
    style: 'currency',
    currency: 'DKK',
    currencyDisplay: 'code',
  }).format(value)
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
