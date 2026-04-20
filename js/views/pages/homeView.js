import { get, set } from '../../utils/dom.js'
import { Paragraph } from '../components/atoms/index.js'

const renderHomePage = () => {
  const app = get('#root')

  const p = Paragraph()
  p.innerText = 'Hej verden'
  set(p, app)
}

export default renderHomePage
