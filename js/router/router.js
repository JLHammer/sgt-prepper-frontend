import homeController from '../controllers/homeController.js'
import { productController } from '../controllers/productController.js'
import { productsController } from '../controllers/productsController.js'
import { clearMain, create, get, set } from '../utils/dom.js'
import { renderIcons } from '../utils/icons.js'

// Initialize router
export function initRouter() {
  window.addEventListener('hashchange', handleRoute)
  window.addEventListener('load', handleRoute)
}

// Handle routing
async function handleRoute() {
  clearMain()

  const hash = window.location.hash || '#/'
  const cleanHash = hash.replace(/^#\/?/, '')
  const segments = cleanHash.split('/').filter(Boolean)

  // Route for home page
  if (segments.length === 0) {
    await homeController()
    renderIcons()
    return
  }

  // Route for products page
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

  if (segments[0] === 'produkt' && segments.length === 2) {
    await productController(segments[1])
    renderIcons()
    return
  }

  const root = get('#root')
  const notFound = create('h1', 'text-2xl font-bold')
  notFound.innerText = 'Side ikke fundet'
  set(notFound, root)
  renderIcons()
}
