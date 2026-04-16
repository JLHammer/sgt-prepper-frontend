import { Paragraph } from '../components/atoms/index.js'

const categoryView = () => {
  const app = document.querySelector('#root')

  const p = Paragraph()
  p.innerText = 'Hej verden'
  app.append(p)
}

export default categoryView
