import { set } from '../../../utils/dom.js'
import { Figure, Figcaption, Img, Div, Paragraph } from '../atoms/index.js'

export const Card = ({ name, imageUrl, teaser, price, stock, slug }) => {
  const card = Figure('overflow-hidden rounded-lg border p-4 shadow-md')
  const imgWrapper = Div('product-image-wrapper overflow-hidden')
  const img = Img(imageUrl, name, 'h-48 w-full object-cover')
  const figcaption = Figcaption(
    name,
    'product-content-wrapper text-lg font-semibold',
  )
  const teaserParagraph = Paragraph(teaser, 'mb-2 text-gray-600')
  const priceParagraph = Paragraph(
    `Pris: ${price} DKK`,
    'font-bold text-gray-800',
  )
  const stockParagraph = Paragraph(
    `Lagerstatus: ${stock > 0 ? 'På lager' : 'Udsolgt'}`,
    `mb-4 ${stock > 0 ? 'text-green-600' : 'text-red-600'}`,
  )

  set(img, imgWrapper)
  set(imgWrapper, card)
  set([teaserParagraph, priceParagraph, stockParagraph], figcaption)
  set(figcaption, card)

  return card
}
