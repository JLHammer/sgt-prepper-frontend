import { get, set } from '../../utils/dom.js'
import { Section, Paragraph } from '../components/atoms/index.js'

const renderOrderPage = () => {
  const app = get('#root')
  const orderPageContainer = Section('order-page-container main-container')

  const p = Paragraph()
  p.innerText = 'Hej verden'
  set(p, orderPageContainer)
  set(orderPageContainer, app)
}

export default renderOrderPage
