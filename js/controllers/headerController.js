import { render } from '../utils/dom.js'
import { createHeader } from '../views/partials/headerView.js'
import { renderLoginButton } from './loginController.js'

export const headerController = async () => {
  const loginBtn = await renderLoginButton()
  const headerHtml = createHeader(loginBtn)
  render('header', headerHtml)
}
