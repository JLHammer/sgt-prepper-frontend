import { homeController } from '../controllers/homeController.js'
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
    console.log('Product Controller')
    return
  }

  const root = get('#root')
  const notFound = create('h1', 'text-2xl font-bold')
  notFound.innerText = 'Side ikke fundet'
  set(notFound, root)
}
