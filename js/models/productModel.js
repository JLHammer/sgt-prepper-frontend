import { request } from '../utils/http.js'

const url = 'http://localhost:4000/api/products'
const apiOrigin = new URL(url).origin

// Normalize image URL to ensure it is absolute
const normalizeImageUrl = (product) => {
  if (!product?.imageUrl) return product

  return {
    ...product,
    imageUrl: product.imageUrl.startsWith('http')
      ? product.imageUrl
      : `${apiOrigin}${product.imageUrl}`,
  }
}

// Get list of all products by category slug
export const getProductList = async (category) => {
  try {
    const data = await request(`${url}/${category}`)
    return Array.isArray(data) ? data.map(normalizeImageUrl) : data
  } catch (error) {
    throw new Error('Request error on product list', { cause: error })
  }
}

// Get a single product by product slug
export const getProduct = async (product) => {
  try {
    const data = await request(`${url}/bySlug/${product}`)
    return normalizeImageUrl(data)
  } catch (error) {
    throw new Error('Request error on product', { cause: error })
  }
}
