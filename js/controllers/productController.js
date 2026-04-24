import { getProductList } from '../models/productModel.js'
import { price2Dkk } from '../utils/formatters.js'
import renderProductsPage from '../views/pages/productsView.js'
import renderProductPage from '../views/pages/productView.js'

export const productController = async (product_slug, category_slug) => {
  const products = await getProductList(category_slug)

  if (!product_slug) {
    renderProductsPage(products, category_slug)
    return
  }

  const data = products.find((product) => product.slug === product_slug)

  if (!data) {
    window.location.hash = `#/produkter/${category_slug}`
    return
  }

  const formattedData = {
    ...data,
    price: price2Dkk(data.price),
    categorySlug: category_slug,
  }

  renderProductPage(formattedData)
}
