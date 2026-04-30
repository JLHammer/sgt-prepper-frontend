import { get, set } from '../../utils/dom.js'
import {
  Img,
  Heading,
  Div,
  Span,
  createFragment,
  Button,
} from '../components/atoms/index.js'

const count = '0' // PLACEHOLDER - Should be based on actual cart content

export const createHeader = (loginBtn) => {
  const header = createFragment()

  const logo = Img('/images/logo.svg', 'Sgt. Prepper logo')
  const h1 = Heading(1, 'Sgt. Prepper', 'heading-1')
  const cartWrapper = Button({
    text: '',
    type: 'button',
    event: 'click',
    func: () => {},
    className: 'cart-button',
  })
  const cartIcon = Img('/images/cart.svg', 'Cart')

  const cartCountWrapper = Div('cart-count')
  const cartCount = Span(`${count}`, 'w-full text-xs text-white')
  set(cartCount, cartCountWrapper)

  const logoContainer = Button({
    text: '',
    type: 'button',
    event: 'click',
    func: () => {
      window.location.href = '/index.html'
    },
    className: 'logo-container',
  })
  set([logo, h1], logoContainer)

  const cartLoginContainer = Div('cart-login-container')
  set([loginBtn, cartWrapper], cartLoginContainer)

  set([cartIcon, cartCountWrapper], cartWrapper)
  set([logoContainer, cartLoginContainer], header)

  return header
}
