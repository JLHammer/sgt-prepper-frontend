import { get, set } from '../../utils/dom.js'
import { Heading } from '../components/atoms/index.js'
import { Card } from '../components/molecules/card.js'

const renderProductPage = (product) => {
  const { name, imageUrl, teaser, price, stock, slug } = product
  const root = get('#root')

  const h1 = Heading(name, 'text-3xl font-bold mb-4')
  set(h1, root)

  const productCard = Card(product)
  set(productCard, root)
}

export default renderProductPage
