import { getProduct } from '../models/productModel.js'
import { price2Dkk } from '../utils/formatters.js'
import renderProductPage from '../views/pages/productView.js'

export const productController = async (product_slug, category_slug) => {
  const data = await getProduct(product_slug)

  const formattedData = {
    ...data,
    price: price2Dkk(data.price),
    categorySlug: category_slug,
  }

  renderProductPage(formattedData)
}
