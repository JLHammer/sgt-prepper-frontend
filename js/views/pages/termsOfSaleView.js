import { get, set } from '../../utils/dom.js'
import { Paragraph, Section } from '../components/atoms/index.js'

export const renderTermsOfSalePage = async () => {
  const root = get('#root')
  const termsOfSalePageContainer = Section(
    'terms-of-sale-page-container main-container',
  )

  const p = Paragraph('This is the terms of sale page.')

  set(p, termsOfSalePageContainer)
  set(termsOfSalePageContainer, root)
  return termsOfSalePageContainer
}

export default renderTermsOfSalePage
