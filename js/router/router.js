import homeController from '../controllers/homeController.js'
import { checkoutController } from '../controllers/checkoutController.js'
import { cartController } from '../controllers/cartController.js'
import { loginController } from '../controllers/loginController.js'
import { productController } from '../controllers/productController.js'
import { productsController } from '../controllers/productsController.js'
import { clearMain, create, get, set } from '../utils/dom.js'
import { renderIcons } from '../utils/icons.js'

// Initialize router
export function initRouter() {
  window.addEventListener('hashchange', handleRoute)
  window.addEventListener('load', handleRoute)
}

// Routing
async function handleRoute() {
  clearMain()

  const hash = window.location.hash || '#/'
  const cleanHash = hash.replace(/^#\/?/, '')
  const segments = cleanHash.split('/').filter(Boolean)

  // Route for login page
  if (segments[0] === 'login') {
    loginController()
    renderIcons()
    return
  }

  // Route for home page
  if (segments.length === 0) {
    await homeController()
    renderIcons()
    return
  }

  // Route for category page
  if (segments[0] === 'produkter') {
    if (segments.length === 2) {
      await productsController(segments[1])
      renderIcons()
      return
    }
    await productsController()
    renderIcons()
    return
  }

  // Route for product detail page
  if (segments[0] === 'produkt' && segments.length === 3) {
    await productController(segments[2], segments[1])
    renderIcons()
    return
  }

  if (segments[0] === 'produkt' && segments.length === 2) {
    await productController(segments[1])
    renderIcons()
    return
  }

  // Route for cart page
  if (segments[0] === 'cart') {
    cartController()
    renderIcons()
    return
  }

  // Route for checkout page
  if (segments[0] === 'checkout') {
    checkoutController()
    renderIcons()
    return
  }

  // Route alias for checkout page
  if (segments[0] === 'bestilling') {
    checkoutController()
    renderIcons()
    return
  }

  const root = get('#root')
  const notFound = create('h1', 'text-2xl font-bold')
  notFound.innerText = 'Side ikke fundet'
  set(notFound, root)
  renderIcons()
}
