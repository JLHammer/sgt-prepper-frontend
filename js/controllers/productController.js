import { getProduct, getProductList } from '../models/productModel.js'
import { render } from '../utils/dom.js'
import { price2Dkk } from '../utils/formatters.js'
import renderProductsPage from '../views/pages/productsView.js'
import renderProductPage from '../views/pages/productView.js'

// export const oldProductList = async (product_slug, category_slug) => {
//   const products = await getProductList(category_slug)

//   if (!product_slug) {
//     // Format price for all products in the list
//     const formattedProducts = products.map((product) => ({
//       ...product,
//       price: price2Dkk(product.price),
//     }))
//     renderProductsPage(formattedProducts, category_slug)
//     return
//   }

//   const data = products.find((product) => product.slug === product_slug)

//   if (!data) {
//     window.location.hash = `#/produkter/${category_slug}`
//     return
//   }

//   const formattedData = {
//     ...data,
//     price: price2Dkk(data.price),
//     categorySlug: category_slug,
//   }

//   renderProductPage(formattedData)
// }

export const ProductList = async (category_slug) => {
  const data = await getProductList(category_slug || 'vand-og-vandrensning')

  const formattedProducts = data.map((product) => ({
    ...product,
    price: price2Dkk(product.price),
  }))
  const productsHtml = renderProductsPage(formattedProducts, category_slug)
  render('root', productsHtml, true)
}

export const productDetails = async (product_slug) => {
  const data = await getProduct(product_slug)
  const formattedData = {
    ...data,
    price: price2Dkk(data.price),
  }
  const productHtml = renderProductPage(formattedData)
  render('root', productHtml, true)
}
