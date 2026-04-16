import { Paragraph } from '../components/atoms/index.js'

const productView = () => {
  const app = document.querySelector('#root')

  const p = Paragraph()
  p.innerText = 'Hej verden'
  app.append(p)
}

export default productView
