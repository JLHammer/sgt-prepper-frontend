import { get, set } from '../../utils/dom.js'
import {
  Paragraph,
  Section,
  Img,
  Div,
  Heading,
  Link,
} from '../components/atoms/index.js'
import { ListCard } from '../components/molecules/listCard.js'

const renderHomePage = (products = []) => {
  const root = get('#root')
  const homePageContainer = Section('home-page-container')

  const hero = Img('/images/hero.svg', 'Hero image', 'hero-image')

  const h2 = Heading(2, 'Velkommen til Sgt. Prepper')
  const p1 = Paragraph(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris ex, fringilla a ligula id, rutrum blandit eros. Sed ullamcorper fermentum urna sit amet vehicula. Mauris nunc lectus, bibendum id leo sit amet, varius ornare.',
  )
  const p2 = Paragraph(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris ex, fringilla a ligula id, rutrum blandit eros. Sed ullamcorper fermentum urna sit amet vehicula. Mauris nunc lectus, bibendum id leo sit amet, varius ornare.',
  )

  const paragraphContainer = Div(
    'welcome-text-container flex flex-col gap-2 md:flex-row',
  )

  const relativeContainer = Div('relative-container relative')
  const welcomeContainer = Section(
    'welcome-container m-2 flex -translate-y-5 flex-col gap-1 rounded-2xl border border-gray-300 bg-white p-2',
  )
  const newestProductsSection = Section(
    'newest-products-section m-2 flex flex-col gap-3',
  )
  const newestProductsList = Div('newest-products-list flex flex-col')

  const newestProductsHeading = Heading(2, 'Seneste nyt', 'text-2xl font-bold')

  set([p1, p2], paragraphContainer)
  set([h2, paragraphContainer], welcomeContainer)
  set(welcomeContainer, relativeContainer)

  products.forEach((product) => {
    const card = ListCard(product)
    const productHref = product.categorySlug
      ? `/index.html#/produkt/${product.categorySlug}/${product.slug}`
      : '/index.html#/produkter'
    const productLink = Link(productHref, '', 'block')

    set(card, productLink)
    set(productLink, newestProductsList)
  })

  set([newestProductsHeading, newestProductsList], newestProductsSection)
  set([hero, relativeContainer, newestProductsSection], homePageContainer)
  set(homePageContainer, root)
}

export default renderHomePage
