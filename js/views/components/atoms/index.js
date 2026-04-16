import { create } from '../../../utils/index.js'

// Paragraph Atom
export const Paragraph = (className = '') => {
  return create('p', className)
}

// Heading Atom
export const Heading = (num, text, className = '') => {
  const element = create(`h${num}`, className)
  element.innerText = text
  return element
}

// Div atom
export const Div = (className = '') => {
  return create('div', className)
}

// Ul atom
export const Ul = (className = '') => {
  return create('ul', className)
}

// Li atom
export const Li = (text = '', className = '') => {
  const element = create('li', className)
  element.innerText = text
  return element
}

// Link atom
export const Link = (href = '#', text = '', className = '') => {
  const element = create('a', className)
  element.href = href
  element.innerText = text
  return element
}
