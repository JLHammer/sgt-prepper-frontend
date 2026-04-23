import { get, set } from '../../utils/dom.js'
import { Section } from '../components/atoms/index.js'

const renderCheckoutPage = () => {
  const root = get('#root')
  const checkoutPageContainer = Section(
    'checkout-page-container main-container',
  )

  set(checkoutPageContainer, root)
}

export default renderCheckoutPage
