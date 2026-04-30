import '../style.css'
import { headerController } from './controllers/headerController.js'
import { navController } from './controllers/navController.js'
import { footerController } from './controllers/footerController.js'
import { initRouter } from './router/router.js'
import { renderIcons } from './utils/icons.js'

const initApp = async () => {
  await headerController()
  await navController()
  await footerController()
  initRouter()
  renderIcons()
}

initApp()
