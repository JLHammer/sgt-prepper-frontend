import homeController from '../controllers/homeController.js'
import { productsController } from '../controllers/productsController.js'
import { clearMain, create, get, set } from '../utils/index.js'

export function initRouter() {
  window.addEventListener('hashchange', handleRoute)
  window.addEventListener('load', handleRoute)
}

function handleRoute() {
  clearMain()

  const hash = window.location.hash || '#/'
  const cleanHash = hash.replace(/^#\/?/, '')
  const segments = cleanHash.split('/').filter(Boolean)

  if (segments.length === 0) {
    homeController()
    return
  }

  if (segments[0] === 'produkter') {
    if (segments.length === 2) {
      productsController(segments[1])
      return
    }
    productsController()
    return
  }

  const root = get('#root')
  const notFound = create('h1', 'text-2xl font-bold')
  notFound.innerText = 'Side ikke fundet'
  set(notFound, root)
}
