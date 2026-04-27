export const render = (targetId, htmlElement, clearTarget = false) => {
  const el = document.getElementById(targetId)
  if (clearTarget) el.innerHTML = ''
  el.append(htmlElement)
}

// Format price in DKK
export const price2Dkk = (value) => {
  return new Intl.NumberFormat('da-DK', {
    style: 'currency',
    currency: 'DKK',
    currencyDisplay: 'code',
  }).format(value)
}

// Create an element with classes
export const create = (el, classes) => {
  const element = document.createElement(el)
  if (classes) element.className = classes
  return element
}

// Get an element from the DOM
export const get = (target) => document.querySelector(target)

// Set one or more elements in the DOM
export const set = (element, target) => {
  if (Array.isArray(element)) {
    element.forEach((el) => target.appendChild(el))
  } else target.appendChild(element)
}
