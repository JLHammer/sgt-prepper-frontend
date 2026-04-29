import {
  getProductDetails,
  getCategoryProducts,
  getAllProducts,
} from '../models/productModel.js'
import { render } from '../utils/dom.js'
import { price2Dkk } from '../utils/formatters.js'
import renderProductsPage from '../views/pages/productsView.js'
import renderProductPage from '../views/pages/productView.js'

/**
 * Gets all products by category slug
 * @param {*} category_slug
 */

export const ProductList = async (category_slug) => {
  const data = await getCategoryProducts(
    category_slug || 'vand-og-vandrensning',
  )

  const formattedProducts = data.map((product) => ({
    ...product,
    price: price2Dkk(product.price),
  }))
  const productsHtml = renderProductsPage(formattedProducts, category_slug)
  render('root', productsHtml, true)
}

/**
 * Gets a single product by its slug. Category slug is used to link back to the category page
 * @param {*} product_slug
 * @param {*} category_slug
 */

export const productDetails = async (product_slug, category_slug) => {
  const data = await getProductDetails(product_slug)
  const formattedData = {
    ...data,
    price: price2Dkk(data.price),
    categorySlug: category_slug,
  }
  const productHtml = renderProductPage(formattedData)
  render('root', productHtml, true)
}

export const getLatestProducts = async () => {
  const data = await getAllProducts()
  const formatted = data.map((product) => ({
    ...product,
    price: price2Dkk(product.price),
  }))
  const sorted = [...formatted]
    .sort((a, b) => a.createdAt - b.createdAt)
    .reverse()
  const sliced = sorted.slice(0, 3)

  renderProductsPage(sliced, '', 'Seneste nyt')

  return sliced
}
