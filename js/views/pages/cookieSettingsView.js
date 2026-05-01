import { get, set } from '../../utils/dom.js'
import { Paragraph, Section } from '../components/atoms/index.js'

export const renderCookieSettingsPage = async () => {
  const root = get('#root')
  const cookieSettingsPageContainer = Section(
    'cookie-settings-page-container main-container',
  )

  const p = Paragraph('This is the cookie settings page.')

  set(p, cookieSettingsPageContainer)
  set(cookieSettingsPageContainer, root)
  return cookieSettingsPageContainer
}

export default renderCookieSettingsPage
