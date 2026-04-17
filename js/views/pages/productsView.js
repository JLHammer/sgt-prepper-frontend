import { get, set } from '../../utils/index.js'
import { Heading, Div } from '../components/atoms/index.js'
import { Card } from '../components/molecules/card.js'

const productsView = (products) => {
  const root = get('#root')
  const div = Div()
  const h1 = Heading(1, 'Produkter', 'text-2xl font-bold')
  set(h1, div)
  set(div, root)

  products.map((product) => {
    const { name, imageUrl, teaser, price, stock, slug } = product

    const card = Card({ name, imageUrl, teaser, price, stock, slug })
    set(card, div)
  })
}

export default productsView
