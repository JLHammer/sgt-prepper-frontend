import { get, set } from '../../utils/dom.js'
import { Section, Paragraph } from '../components/atoms/index.js'

const renderLoginPage = () => {
  const root = get('#root')
  const loginPageContainer = Section('login-page-container main-container')

  const p = Paragraph()
  p.innerText = 'Login page'
  set(p, loginPageContainer)
  set(loginPageContainer, root)
}

export default renderLoginPage
