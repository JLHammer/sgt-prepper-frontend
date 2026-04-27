import { create, get, set } from '../../utils/dom.js'
import {
  Address,
  createFragment,
  Img,
  Paragraph,
} from '../components/atoms/index.js'

export const createFooter = () => {
  const footer = createFragment()

  const footerImage = Img('/images/footer.svg', 'Footer image', 'footer-image')

  const addressContainer = Address('address-container')
  const name = Paragraph('Sgt. Prepper', 'name')
  const cvr = Paragraph('CVR: 12345678', 'cvr')
  const address = Paragraph('Feltvejen 12', 'street')
  const city = Paragraph('1234 Beredskabsby', 'city')
  const mail = Paragraph('kontakt@sgtprepper.dk', 'mail')
  const phone = Paragraph('Tlf: 12 34 56 78', 'phone')

  set([name, cvr, address, city, mail, phone], addressContainer)
  set([footerImage, addressContainer], footer)

  return footer
}
