import { get, set } from '../../utils/dom.js'
import { Paragraph, Section } from '../components/atoms/index.js'

export const renderAboutUsPage = async () => {
  const root = get('#root')
  const aboutUsPageContainer = Section('about-us-page-container main-container')

  const p = Paragraph('This is the about us page.')

  set(p, aboutUsPageContainer)
  set([aboutUsPageContainer], root)
  return aboutUsPageContainer
}

export default renderAboutUsPage
