import { get, set } from '../../utils/dom.js'
import { Button, Div, Heading, Section } from '../components/atoms/index.js'
import { createIcon } from '../../utils/icons.js'
import { Card } from '../components/molecules/card.js'

const renderProductPage = (product) => {
  const productPageContainer = Section('product-page-container main-container')
  const { name, formElement, categorySlug } = product
  const backButton = Button({
    text: '',
    type: 'button',
    event: 'click',
    func: () => {
      window.location.hash = categorySlug
        ? `#/produkter/${categorySlug}/`
        : '#/produkter/'
    },
    className:
      'inline-flex aspect-square items-center self-start rounded-xl bg-white p-2 shadow-md',
  })
  const backArrowIcon = createIcon('ChevronLeft', 'text-black')

  const h1 = Heading(1, name, 'text-3xl font-bold')
  set(backArrowIcon, backButton)

  const productCard = Card(product)
  const productContainer = Div('product-container')
  set(formElement, productCard)
  set([h1, productCard], productContainer)
  set([backButton, productContainer], productPageContainer)

  return productPageContainer
}

export default renderProductPage
