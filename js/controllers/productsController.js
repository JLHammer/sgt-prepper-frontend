import { getProductList } from '../models/productModel.js'
import productsView from '../views/pages/productsView.js'

export const productsController = async (product_slug) => {
  const data = await getProductList(product_slug)
  productsView(data)
}
