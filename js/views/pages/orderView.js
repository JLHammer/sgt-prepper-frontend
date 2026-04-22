import { get, set } from '../../utils/dom.js'
import { Section, Paragraph } from '../components/atoms/index.js'

const renderOrderPage = () => {
  const root = get('#root')
  const orderPageContainer = Section('order-page-container main-container')

  const p = Paragraph()
  p.innerText = 'Hej verden'
  set(p, orderPageContainer)
  set(orderPageContainer, root)
}

export default renderOrderPage
