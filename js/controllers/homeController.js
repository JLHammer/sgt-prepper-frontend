import { getAllProducts } from '../models/productModel.js'
import renderHomePage from '../views/pages/homeView.js'

async function homeController() {
  const products = await getAllProducts()

  const newestProducts = products
    .sort((firstProduct, secondProduct) => {
      const firstDate = new Date(firstProduct.createdAt || 0).getTime()
      const secondDate = new Date(secondProduct.createdAt || 0).getTime()

      return secondDate - firstDate
    })
    .slice(0, 4)

  renderHomePage(newestProducts)
}

export default homeController
