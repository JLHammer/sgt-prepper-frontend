import { get, set } from '../../utils/dom.js'
import { Heading, Section, Div, Link } from '../components/atoms/index.js'
import { Card } from '../components/molecules/card.js'

const renderProductsPage = (products) => {
  const root = get('#root')
  const productsPageContainer = Section(
    'products-page-container main-container',
  )
  const div = Div('flex flex-col gap-2 rounded-2xl')
  const h1 = Heading(1, 'Produkter', 'text-2xl font-bold')
  set([h1, div], productsPageContainer)
  set(productsPageContainer, root)

  products.map((product) => {
    const { name, imageUrl, teaser, price, stock, slug } = product

    const card = Card({ name, imageUrl, teaser, price, stock, slug })
    const cardLink = Link(`/index.html#/produkt/${slug}`, '', 'block')
    set(card, cardLink)
    set(cardLink, div)
  })
}

export default renderProductsPage
