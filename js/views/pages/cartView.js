import { get, set } from '../../utils/dom.js'
import { Button, Li, Section, Span, Ul } from '../components/atoms/index.js'

const renderCartPage = (data, removeHandler) => {
  const root = get('#root')
  const cartPageContainer = Section('cart-page-container main-container')
  const cartList = Ul('cart-list')

  if (data.length === 0) {
    const emptyMsg = Li(
      'Your cart is empty, please add at least one product to see it here',
      'cart-empty',
    )
    set(emptyMsg, cartList)
    set(cartList, cartPageContainer)
    set(cartPageContainer, root)
    return
  }

  data.map((item) => {
    const cartItem = Li('', 'cart-item')
    const productName = Span(`${item.product.name}`, 'cart-item')
    const productPrice = Span(`${item.priceFormatted}`, 'cart-item')
    const productQuantity = Span(`Quantity: ${item.quantity}`, 'cart-item')
    const removeButton = Button({
      text: 'Remove',
      type: 'button',
      event: 'click',
      func: removeHandler,
      className: 'remove-from-cart-button',
    })
    removeButton.dataset.cart_item_id = item.id

    set([productName, productPrice, productQuantity, removeButton], cartItem)
    set(cartItem, cartList)
  })

  set(cartList, cartPageContainer)
  set(cartPageContainer, root)
}

export default renderCartPage
