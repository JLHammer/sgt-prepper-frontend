import { get, set } from '../../utils/dom.js'
import {
  Heading,
  Section,
  Div,
  Link,
  Hr,
  createFragment,
} from '../components/atoms/index.js'
import { ListCard } from '../components/molecules/listCard.js'

const renderProductsPage = (products, categorySlug) => {
  const el = createFragment()

  const productsPageContainer = Section(
    'products-page-container main-container',
  )
  const div = Div('products-container')
  const h1 = Heading(1, 'Produkter', 'text-2xl font-bold')
  set([h1, div], productsPageContainer)
  set(productsPageContainer, el)

  products.map((product, index) => {
    const { name, imageUrl, teaser, price, stock, slug } = product

    const card = ListCard({ name, imageUrl, teaser, price, stock, slug })
    const productHref = `/index.html#/produkter/${categorySlug}/${slug}`
    const cardLink = Link(productHref, '', 'block')
    set(card, cardLink)
    set(cardLink, div)

    if (index < products.length - 1) {
      const hr = Hr(
        'border-t border-gray-200 hidden md:block w-9/10 self-center',
      )
      set(hr, div)
    }
  })

  set(div, el)
  return el
}

export default renderProductsPage
