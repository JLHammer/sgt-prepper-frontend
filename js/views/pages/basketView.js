import { get, set } from '../../utils/dom.js'
import { Paragraph, Section } from '../components/atoms/index.js'

const renderBasketPage = () => {
  const root = get('#root')
  const basketPageContainer = Section('basket-page-container main-container')

  const p = Paragraph()
  p.innerText = 'Hej verden'
  set(p, basketPageContainer)
  set(basketPageContainer, root)
}

export default renderBasketPage
