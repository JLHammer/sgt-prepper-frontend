import { getProductList } from '../models/productModel.js'
import renderProductsPage from '../views/pages/productsView.js'

export const productsController = async (category_slug) => {
  const data = await getProductList(category_slug)
  renderProductsPage(data, category_slug)
}
