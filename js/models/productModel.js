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
    const endpoint = category ? `${url}/${category}` : url
    const data = await request(endpoint)
    return Array.isArray(data) ? data.map(normalizeImageUrl) : data
  } catch (error) {
    throw new Error('Request error on product list', { cause: error })
  }
}

// Get all products
export const getAllProducts = async () => {
  try {
    const categories = await request(`${apiOrigin}/api/categories`)

    if (!Array.isArray(categories)) return []

    const productGroups = await Promise.all(
      categories.map(async (category) => {
        const data = await request(`${url}/${category.slug}`)

        if (!Array.isArray(data)) return []

        return data.map((product) => ({
          ...normalizeImageUrl(product),
          categorySlug: category.slug,
        }))
      }),
    )

    return productGroups.flat()
  } catch (error) {
    throw new Error('Request error on all products', { cause: error })
  }
}

// Get a single product by category and product slug
export const getProduct = async (category, product) => {
  if (!category || !product) {
    throw new Error('Missing category or product slug')
  }

  try {
    const data = await request(`${url}/${category}/${product}`)
    return normalizeImageUrl(data)
  } catch (error) {
    throw new Error('Request error on product', { cause: error })
  }
}
