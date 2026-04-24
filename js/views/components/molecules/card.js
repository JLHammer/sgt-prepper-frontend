import { set } from '../../../utils/dom.js'
import { Figure, Figcaption, Img, Div, Paragraph } from '../atoms/index.js'

export const Card = (props) => {
  const { name, imageUrl, teaser, price, stock, slug } = props
  const card = Figure('card product-detail-card')
  const imgWrapper = Div('card-image-wrapper')
  const img = Img(imageUrl, name, 'card-image')
  const figcaption = Figcaption(name, 'card-caption')
  const teaserParagraph = Paragraph(teaser, 'text-gray-600')
  const priceParagraph = Paragraph(
    `Pris: ${price} DKK`,
    'text-2xl font-bold text-gray-800',
  )
  const stockParagraph = Paragraph(
    `${stock > 0 ? 'På lager' : 'Udsolgt'}`,
    `text-lg ${stock > 0 ? 'text-green-600' : 'text-red-600'}`,
  )
  set(img, imgWrapper)
  set(imgWrapper, card)
  set([teaserParagraph, priceParagraph, stockParagraph], figcaption)
  set(figcaption, card)
  return card
}
