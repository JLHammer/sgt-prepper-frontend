import { Link } from '../components/atoms/index.js'
import { set } from '../../utils/dom.js'
import {
  Address,
  createFragment,
  Div,
  Img,
  Li,
  Ul,
} from '../components/atoms/index.js'

export const createFooter = () => {
  const footer = createFragment()

  const footerImage = Img('/images/footer.svg', 'Footer image', 'footer-image')

  const footerContent = Div('footer-content')

  const addressContainer = Address('address-container')

  const addressList = Ul('address-list footer-list')
  const name = Li('Sgt. Prepper', 'name')
  const cvr = Li('CVR: 12345678', 'cvr')
  const address = Li('Feltvejen 12', 'street')
  const city = Li('1234 Beredskabsby', 'city')
  const mail = Li('kontakt@sgtprepper.dk', 'mail')
  const phone = Li('Tlf: 12 34 56 78', 'phone')

  const legalList = Ul('legal-list footer-list')
  const privacyPolicy = Li('', 'privacy-policy')
  const termsOfSale = Li('', 'terms-of-sale')
  const copyrightNotice = Li(
    '© 2024 Sgt. Prepper. All rights reserved.',
    'copyright',
  )
  const cookieSettings = Li('', 'cookie-settings')
  const aboutUs = Li('', 'about-us')

  const privacyPolicyLink = Link(
    './index.html#/privacy-policy',
    'Privacy Policy',
    'privacy-policy-link',
  )
  const termsOfSaleLink = Link(
    './index.html#/terms-of-sale',
    'Terms of Sale',
    'terms-of-sale-link',
  )
  const cookieSettingsLink = Link(
    './index.html#/cookie-settings',
    'Cookie Settings',
    'cookie-settings-link',
  )
  const aboutUsLink = Link(
    './index.html#/about-us',
    'About Us',
    'about-us-link',
  )

  set(aboutUsLink, aboutUs)
  set(cookieSettingsLink, cookieSettings)
  set(termsOfSaleLink, termsOfSale)
  set(privacyPolicyLink, privacyPolicy)
  set(
    [privacyPolicy, termsOfSale, cookieSettings, aboutUs, copyrightNotice],
    legalList,
  )

  set([name, cvr, address, city, mail, phone], addressList)
  set(addressList, addressContainer)
  set([addressContainer, legalList], footerContent)
  set([footerImage, footerContent], footer)

  return footer
}
