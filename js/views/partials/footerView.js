import { create, get, set } from '../../utils/dom.js'
import { createFragment, Img } from '../components/atoms/index.js'

export const createFooter = () => {
  const footer = createFragment()

  const footerImage = Img('/images/footer.svg', 'Footer image', 'footer-image')

  set(footerImage, footer)
  return footer
}
