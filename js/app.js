import '../style.css'
import { renderHeader } from './views/partials/headerView.js'
import { navController } from './controllers/navController.js'
import { renderFooter } from './views/partials/footerView.js'
import { initRouter } from './router/router.js'
import { renderIcons } from './utils/icons.js'

const initApp = () => {
  renderHeader()
  navController()
  renderFooter()
  initRouter()
  renderIcons()
}

initApp()
