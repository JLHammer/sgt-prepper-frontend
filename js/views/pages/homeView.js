import { get, set } from '../../utils/dom.js'
import {
  Paragraph,
  Section,
  Img,
  Div,
  Heading,
} from '../components/atoms/index.js'

const renderHomePage = () => {
  const app = get('#root')
  const homePageContainer = Section('home-page-container')

  const hero = Img('/images/hero.svg', 'Hero image', 'hero-image')

  const h2 = Heading(2, 'Velkommen til Sgt. Prepper')
  const p1 = Paragraph(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris ex, fringilla a ligula id, rutrum blandit eros. Sed ullamcorper fermentum urna sit amet vehicula. Mauris nunc lectus, bibendum id leo sit amet, varius ornare.',
  )
  const p2 = Paragraph(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris ex, fringilla a ligula id, rutrum blandit eros. Sed ullamcorper fermentum urna sit amet vehicula. Mauris nunc lectus, bibendum id leo sit amet, varius ornare.',
  )

  const paragraphContainer = Div('paragraph-container flex flex-col gap-2')
  const welcomeContainer = Section(
    'welcome-container flex flex-col gap-1 rounded-2xl border border-gray-300 p-2 bg-white m-2',
  )

  set([p1, p2], paragraphContainer)
  set([h2, paragraphContainer], welcomeContainer)
  set([hero, welcomeContainer], homePageContainer)
  set(homePageContainer, app)
}

export default renderHomePage
