import { get, set } from '../../utils/dom.js'
import { Section, Heading } from '../components/atoms/index.js'
import { Card } from '../components/molecules/card.js'

const renderProductPage = (product) => {
  const root = get('#root')
  const productPageContainer = Section('product-page-container main-container')

  const { name } = product

  const h1 = Heading(1, name, 'mb-4 text-3xl font-bold')
  set(h1, productPageContainer)

  const productCard = Card(product)
  set(productCard, productPageContainer)

  set(productPageContainer, root)
}

export default renderProductPage
