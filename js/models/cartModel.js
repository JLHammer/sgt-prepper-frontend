import { request } from '../utils/http.js'

const url = 'http://localhost:4000/api/cart'

export const getCartList = async () => {
  try {
    const data = await request(url)
    return data
  } catch (error) {
    console.error(`Error fetching cart list: ${error}`)
  }
}

export const addProductToCart = async (productId, quantity) => {
  try {
    const data = await request(url, 'POST', { productId, quantity })
    return data
  } catch (error) {
    console.error(`Error adding product to cart: ${error}`)
  }
}

export const deleteProductFromCart = async (id) => {
  try {
    const data = await request(`${url}/${id}`, 'DELETE')
    return data
  } catch (error) {
    console.error(`Error deleting product from cart: ${error}`)
  }
}

export const getCartCount = async () => {
  try {
    const data = await request(url)
    return data.reduce((total, item) => total + item.quantity, 0)
  } catch (error) {
    console.error(`Error fetching cart count: ${error}`)
    return 0
  }
}
