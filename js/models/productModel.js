import { request } from '../utils/http.js'

const url = 'http://localhost:4000/api/products'

export const getProductList = async (product_slug) => {
  try {
    const data = await request(`${url}/${product_slug}`)
    return data
  } catch (error) {
    throw new Error('Request error on product list', { cause: error })
  }
}

export const getProduct = async (product_slug) => {
  try {
    const data = await request(`${url}/bySlug/${product_slug}`)
    return data
  } catch (error) {
    throw new Error('Request error on product', { cause: error })
  }
}
