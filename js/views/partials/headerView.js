import { get, set } from '../../utils/dom.js'
import { Img, Heading, Button } from '../components/atoms/index.js'

export const renderHeader = () => {
  const header = get('#header')
  header.classList.add(
    'flex',
    'justify-center',
    'items-center',
    'md:justify-start',
    'gap-2',
  )

  const logo = Img('../../../public/images/logo.svg', 'Sgt. Prepper logo')
  const h1 = Heading(1, 'Sgt. Prepper', 'text-2xl font-bold')
  const loginButton = Button('Log ind')
  const basketWrapper = Button('')
  const basket = Img('../../../public/images/basket.svg', 'Indkøbskurv')
  set(basket, basketWrapper)
  set([logo, h1, loginButton, basketWrapper], header)


}
