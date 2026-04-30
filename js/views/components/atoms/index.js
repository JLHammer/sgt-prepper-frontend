import { create } from '../../../utils/dom.js'

// Fragment atom
export const createFragment = () => document.createDocumentFragment()

// Paragraph Atom
export const Paragraph = (innerText, className = '') => {
  const paragraph = create('p', className)
  paragraph.innerText = innerText
  return paragraph
}

// Heading Atom
export const Heading = (num, innerText, className = '') => {
  const heading = create(`h${num}`, className)
  heading.innerText = innerText
  return heading
}

// Div atom
export const Div = (className = '') => {
  return create('div', className)
}

// Span atom
export const Span = (innerText, className = '') => {
  const span = create('span', className)
  span.innerText = innerText
  return span
}

// Section atom
export const Section = (className = '') => {
  return create('section', className)
}

// Article atom
export const Article = (className = '') => {
  return create('article', className)
}

// Aside atom
export const Aside = (className = '') => {
  return create('aside', className)
}

// Ul atom
export const Ul = (className = '') => {
  return create('ul', className)
}

// Li atom
export const Li = (innerText = '', className = '') => {
  const li = create('li', className)
  li.innerText = innerText
  return li
}

// Link atom
export const Link = (href = '#', innerText = '', className = '') => {
  const a = create('a', className)
  a.href = href
  a.innerText = innerText
  return a
}

// Image atom
export const Img = (src = '', alt = '', className = '') => {
  const image = create('img', className)
  image.src = src
  image.alt = alt
  return image
}

// Figure atom
export const Figure = (className = '') => {
  const figure = create('figure', className)
  return figure
}

// Figcaption atom
export const Figcaption = (className = '') => {
  const figcaption = create('figcaption', className)
  return figcaption
}

// Form atom
export const Form = (method = 'GET', className = '') => {
  const form = create('form', className)
  form.method = method
  return form
}

// Input atom
export const Input = (
  type,
  name,
  placeholder,
  value = '',
  autocomplete = 'on',
  className = '',
) => {
  const input = create('input', className)
  input.type = type
  input.name = name
  input.id = name
  input.placeholder = placeholder || ''
  input.value = value
  input.autocomplete = autocomplete
  return input
}

// Label atom
export const Label = (text = '', id, className = '') => {
  const label = create('label', className)
  label.innerText = text
  label.htmlFor = id
  return label
}

// Button atom
export const Button = ({
  text = '',
  type = 'button',
  event,
  func,
  className = '',
} = {}) => {
  if (event && typeof func !== 'function') {
    throw new Error(
      `Button: 'func' must be a function when 'event' is provided`,
    )
  }
  const button = create('button', className)
  button.innerText = text
  button.type = type
  if (event && func) button.addEventListener(event, func)
  return button
}

// Hr atom
export const Hr = (className = '') => {
  return create('hr', className)
}

// Address atom
export const Address = (className = '') => {
  const address = create('address', className)
  return address
}
