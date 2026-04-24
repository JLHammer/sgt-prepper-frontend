import { get, set } from '../../utils/dom.js'
import { Button, Heading, Section } from '../components/atoms/index.js'
import { createIcon } from '../../utils/icons.js'
import { Card } from '../components/molecules/card.js'

const renderProductPage = (product) => {
  const root = get('#root')
  const productPageContainer = Section('product-page-container main-container')
  const { categorySlug } = product
  const backButton = Button(
    '',
    'inline-flex aspect-square items-center self-start rounded-xl bg-white p-2 shadow-md',
    () => {
      window.location.hash = categorySlug
        ? `#/produkter/${categorySlug}`
        : '#/produkter'
    },
  )
  const backArrowIcon = createIcon('ChevronLeft', 'text-black')

  const { name } = product

  const h1 = Heading(1, name, 'text-3xl font-bold')
  set(backArrowIcon, backButton)

  const productCard = Card(product)
  set([backButton, h1, productCard], productPageContainer)

  set(productPageContainer, root)
}

export default renderProductPage
