import { create, get, set } from '../../utils/dom.js'
import { Img } from '../components/atoms/index.js'

export const renderFooter = async () => {
  const footer = get('#footer')

  const footerImage = Img('/images/footer.svg', 'Footer image', 'footer-image')

  set(footerImage, footer)
}
