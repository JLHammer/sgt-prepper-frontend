import { getLatestProducts } from './productController.js'
import renderHomePage from '../views/pages/homeView.js'

async function homeController() {
  const latestProducts = await getLatestProducts()
  renderHomePage(latestProducts)
}

export default homeController
