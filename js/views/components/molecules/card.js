import { set } from '../../../utils/dom.js'
import { Figure, Figcaption, Img } from '../atoms/index.js'

export const Card = ({ name, imageUrl, teaser, price, stock, slug }) => {
  const card = Figure('border p-4 rounded-lg shadow-md mb-4')
  const img = Img(imageUrl, name, 'w-full h-48 object-cover mb-4')
  const figcaption = Figcaption(name, 'text-lg font-semibold mb-2')
  const teaserParagraph = Figcaption(teaser, 'text-gray-600 mb-2')
  const priceParagraph = Figcaption(
    `Pris: ${price} DKK`,
    'text-gray-800 font-bold mb-2',
  )
  const stockParagraph = Figcaption(
    `Lagerstatus: ${stock > 0 ? 'På lager' : 'Udsolgt'}`,
    `mb-4 ${stock > 0 ? 'text-green-600' : 'text-red-600'}`,
  )

  set(img, card)
  set(figcaption, card)
  set(teaserParagraph, card)
  set(priceParagraph, card)
  set(stockParagraph, card)
  return card
}
