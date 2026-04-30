import { set } from '../../utils/dom.js'
import {
  Img,
  Heading,
  Div,
  Span,
  createFragment,
  Button,
  Link,
} from '../components/atoms/index.js'

const count = '0'

export const createHeader = (loginBtn) => {
  const header = createFragment()

  const logo = Img('/images/logo.svg', 'Sgt. Prepper logo')
  const h1 = Heading(1, 'Sgt. Prepper', 'heading-1')
  const cartWrapper = Link('/index.html#/cart', '', 'cart-link')
  const cartIcon = Img('/images/cart.svg', 'Cart')
  const cartCountWrapper = Div('cart-count-wrapper')
  const cartCount = Span(`${count}`, 'cart-count')

  const logoContainer = Link('/index.html', '', 'logo-link')

  const cartLoginContainer = Div('login-cart-container')

  set(cartCount, cartCountWrapper)
  set([cartIcon, cartCountWrapper], cartWrapper)
  set([logo, h1], logoContainer)
  set([loginBtn, cartWrapper], cartLoginContainer)
  set([logoContainer, cartLoginContainer], header)

  return header
}
