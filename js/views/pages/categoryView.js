import { get, set } from '../../utils/dom.js'
import { Paragraph, Section } from '../components/atoms/index.js'

const renderCategoryPage = () => {
  const app = get('#root')
  const categoryPageContainer = Section(
    'category-page-container main-container',
  )

  const p = Paragraph()
  p.innerText = 'Hej verden'
  set(p, categoryPageContainer)
  set(categoryPageContainer, app)
}

export default renderCategoryPage
