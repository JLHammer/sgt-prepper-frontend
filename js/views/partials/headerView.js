import { get, set } from '../../utils/dom.js'
import { Img, Heading, Button, Div, Span } from '../components/atoms/index.js'

const count = '0' // PLACEHOLDER - Should be based on actual basket content

export const renderHeader = () => {
  const header = get('#header')
  header.classList.add('flex', 'justify-between', 'items-center')

  const logo = Img('/images/logo.svg', 'Sgt. Prepper logo')
  const h1 = Heading(1, 'Sgt. Prepper', 'heading-1')
  const loginButton = Button('Log ind', 'login-button', () => {})
  const basketWrapper = Button('', 'basket-button', () => {})
  const basketIcon = Img('/images/basket.svg', 'Indkøbskurv')

  const basketCountWrapper = Div('basket-count')
  const basketCount = Span(`${count}`, 'w-full text-xs text-white')
  set(basketCount, basketCountWrapper)

  const logoContainer = Div('logo-container')
  set([logo, h1], logoContainer)

  const basketLoginContainer = Div('basket-login-container')
  set([loginButton, basketWrapper], basketLoginContainer)

  set([basketIcon, basketCountWrapper], basketWrapper)
  set([logoContainer, basketLoginContainer], header)
}
