import { Paragraph } from '../components/atoms/index.js'
import { get, set } from '../../utils/index.js'

const basketView = () => {
  const app = get('#root')

  const p = Paragraph()
  p.innerText = 'Hej verden'
  set(p, app)
}

export default basketView
