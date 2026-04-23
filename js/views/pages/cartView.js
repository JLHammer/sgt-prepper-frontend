import { get, set } from '../../utils/dom.js'
import { Section } from '../components/atoms/index.js'

const renderCartPage = () => {
  const root = get('#root')
  const cartPageContainer = Section('cart-page-container main-container')

  set(cartPageContainer, root)
}

export default renderCartPage
