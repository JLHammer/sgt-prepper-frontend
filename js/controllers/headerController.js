import { render } from '../utils/dom.js'
import { createHeader } from '../views/partials/headerView.js'

export const headerController = async () => {
  const headerHtml = createHeader()
  render('header', headerHtml)
}
