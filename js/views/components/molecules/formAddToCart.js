import { set } from '../../../utils/dom.js'
import { Button, Form, Input } from '../atoms/index.js'

export const formAddToCart = (productId, clickHandle) => {
  const form = Form()

  const input = Input('number', 'quantity', 'Amount', 1, 'on', 'cart-quantity')
  const button = Button({
    text: 'Add to cart',
    type: 'button',
    event: 'click',
    func: clickHandle,
    className: 'add-to-cart-button',
  })

  button.dataset.product_id = productId

  set([input, button], form)

  return form
}
