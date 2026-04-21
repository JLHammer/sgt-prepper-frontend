import { set } from '../../../utils/dom'
import { Div, Heading, Paragraph } from '../atoms'

export const mainWrapper = (title, description = '') => {
  let meta = document.querySelector('meta[name="description"]')

  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'description'
    document.head.appendChild(meta)
  }

  meta.content = description

  const div = Div('main-wrapper')
  const h1 = Heading(1, title, 'heading-1')

  set([h1], div)

  if (description) {
    const p = Paragraph(description)
    set(p, div)
  }

  return div
}
