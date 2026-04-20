import { get, set } from '../../utils/dom.js'
import { Heading, Section, Div } from '../components/atoms/index.js'
import { Card } from '../components/molecules/card.js'

const renderProductsPage = (products) => {
  const root = get('#root')
  const section = Section()
  const div = Div(
    'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6',
  )
  const h1 = Heading(1, 'Produkter', 'text-2xl font-bold')
  set([h1, div], section)
  set(section, root)

  products.map((product) => {
    const { name, imageUrl, teaser, price, stock, slug } = product

    const card = Card({ name, imageUrl, teaser, price, stock, slug })
    set(card, div)
  })
}

export default renderProductsPage
