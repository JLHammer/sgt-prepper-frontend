import { request } from '../utils/http.js'

const url = 'http://localhost:4000/api/products'

// Get list of all products by category slug
export const getCategoryProducts = async (category_slug) => {
  try {
    const data = await request(`${url}/${category_slug}`)
    return data
  } catch (error) {
    throw new Error('Request error on product list', { cause: error })
  }
}

// Get a single product by category and product slug
export const getProductDetails = async (product_slug) => {
  if (!product_slug) {
    throw new Error('Missing product slug')
  }

  try {
    const data = await request(`${url}/bySlug/${product_slug}`)
    return data
  } catch (error) {
    throw new Error('Request error on product', { cause: error })
  }
}

export const getAllProducts = async () => {
  try {
    const data = await request(url)
    return data
  } catch (error) {
    throw new Error('Request error on all products', { cause: error })
  }
}
