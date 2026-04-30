import { getCartList, deleteProductFromCart } from '../models/cartModel.js'
import { price2Dkk } from '../utils/formatters.js'
import { updateCartCount } from './headerController.js'
import renderCartPage from '../views/pages/cartView.js'
import { clearElement } from '../utils/dom.js'

export const cartController = async () => {
  clearElement('root')
  const data = await getCartList()

  const formattedData = data.map((item) => ({
    ...item,
    priceFormatted: price2Dkk(item.product.price),
  }))

  renderCartPage(formattedData, removeFromCart)
}

export const removeFromCart = async (e) => {
  const cartItemId = Number(e.target.dataset.cart_item_id)
  await deleteProductFromCart(cartItemId)
  await updateCartCount()
  cartController()
}
