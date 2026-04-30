import { get, set } from '../../utils/dom.js'
import { Form, Section, Button } from '../components/atoms/index.js'
import { FormGroup } from '../components/molecules/formGroup.js'

const renderLoginPage = (handleLogin) => {
  const root = get('#root')
  const loginPageContainer = Section('login-page-container main-container')

  const form = Form('POST', 'login-form')
  const userNameGroup = FormGroup(
    'Username',
    'text',
    'username',
    'Enter your username',
    '',
    'username-group',
  )
  const passwordGroup = FormGroup(
    'Password',
    'password',
    'password',
    'Enter your password',
    '',
    'password-group',
  )

  const button = Button({
    text: 'Log in',
    type: 'submit',
    className: 'login-button',
  })

  set([userNameGroup, passwordGroup, button], form)
  set(form, loginPageContainer)
  set(loginPageContainer, root)

  form.addEventListener('submit', (e) => {
    handleLogin(e)
  })
}

export default renderLoginPage
