import './style.css'
import renderHeader from './views/partials/headerView.js'
import renderNav from './views/partials/navView.js'
import renderFooter from './views/partials/footerView.js'
import { initRouter } from './router/router.js'

const initApp = () => {
  renderHeader()
  renderNav()
  renderFooter()
  initRouter()
}

initApp()
