import { getCartCount } from '../models/cartModel.js'
import { isLoggedIn } from '../utils/auth.js'
import { render } from '../utils/dom.js'
import { createHeader } from '../views/partials/headerView.js'
import { renderLoginButton } from './loginController.js'

export const headerController = async () => {
  const loginBtn = await renderLoginButton()
  const headerHtml = createHeader(loginBtn)
  render('header', headerHtml)
}

export const updateCartCount = async () => {
  if (!(await isLoggedIn())) return
  const count = await getCartCount()
  const cartCount = document.querySelector('.cart-count')
  const cartCountWrapper = document.querySelector('.cart-count-wrapper')
  if (cartCount) cartCount.innerText = count
  if (cartCountWrapper)
    cartCountWrapper.style.display = count > 0 ? 'flex' : 'none'
}
