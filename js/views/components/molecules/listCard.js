import { set } from '../../../utils/dom.js'
import { Figure, Figcaption, Img, Div, Paragraph, Hr } from '../atoms/index.js'

export const ListCard = ({ name, imageUrl, teaser, price, stock, slug }) => {
  const card = Figure('card product-list-card')
  const imgWrapper = Div('card-image-wrapper')
  const img = Img(imageUrl, name, 'card-image')
  const figcaption = Figcaption('card-caption')
  const descriptionReviewContainer = Div('description-review-container')
  const stockPriceContainer = Div('stock-price-container')

  const nameParagraph = Paragraph(name, 'product-name font-bold')
  const teaserParagraph = Paragraph(teaser, 'product-teaser')
  const stockParagraph = Paragraph(
    `${stock > 0 ? 'På lager' : 'Udsolgt'}`,
    `${stock > 0 ? 'text-green-600' : 'text-red-600'}`,
    'product-stock',
  )
  const priceParagraph = Paragraph(
    `Pris: ${price}`,
    'product-price font-bold',
    'product-price',
  )

  set(img, imgWrapper)
  set(imgWrapper, card)
  set([nameParagraph, teaserParagraph], descriptionReviewContainer)
  set([stockParagraph, priceParagraph], stockPriceContainer)
  set([descriptionReviewContainer, stockPriceContainer], figcaption)
  set(figcaption, card)
  return card
}
