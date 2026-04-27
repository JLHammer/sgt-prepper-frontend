import { getAllProducts } from '../models/productModel.js'
import renderHomePage from '../views/pages/homeView.js'

async function homeController() {

  renderHomePage()
}

export default homeController
