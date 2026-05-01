import { get, set } from '../../utils/dom.js'
import { Paragraph, Section } from '../components/atoms/index.js'

export const renderPrivacyPolicyPage = async () => {
  const root = get('#root')
  const privacyPolicyPageContainer = Section(
    'privacy-policy-page-container main-container',
  )

  const p = Paragraph('This is the privacy policy page.')

  set(p, privacyPolicyPageContainer)
  set([privacyPolicyPageContainer], root)
  return privacyPolicyPageContainer
}

export default renderPrivacyPolicyPage
