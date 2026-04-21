import { create, get, set } from '../../utils/dom.js'
import { Li, Ul, Link, Button } from '../components/atoms/index.js'
import { createIcon } from '../../utils/icons.js'

const CATEGORY_ICON_BY_SLUG = {
  'vand-og-vandrensning': 'Droplet',
  'mad-og-langtidsopbevaring': 'Hamburger',
  'energi-og-belysning': 'Zap',
  'forstehjaelp-og-sundhed': 'Cross',
  'kommunikation-og-navigation': 'Nfc',
}

const getCategoryIconName = (item) => {
  const slug = (item?.slug || '').toLowerCase()
  return CATEGORY_ICON_BY_SLUG[slug] || 'Package'
}

const renderNav = async (data) => {
  const nav = get('#nav')
  nav.classList.add('gap-2')
  nav.innerHTML = ''

  const backArrowIcon = createIcon('ArrowLeft', 'text-white')
  const backArrowButton = Button('')
  set(backArrowIcon, backArrowButton)

  const mobileWrapper = create('div', 'relative inline-block md:hidden')

  const toggleButton = create(
    'button',
    'flex items-center gap-2 rounded bg-slate-600 px-3 py-2 text-white hover:bg-slate-700',
  )
  toggleButton.type = 'button'

  const menuIcon = createIcon('Menu')
  const menuLabel = create('span')
  menuLabel.innerText = 'Categories'
  set(menuIcon, toggleButton)
  set(menuLabel, toggleButton)

  const mobileMenu = Ul(
    'absolute left-0 z-20 mt-2 hidden min-w-64 rounded border border-slate-300 bg-white p-2 shadow-lg',
  )
  mobileMenu.setAttribute('role', 'menu')

  const desktopMenu = Ul('hidden md:flex md:items-center md:gap-6')

  data.map((item) => {
    const mobileLi = Li('', '')
    mobileLi.setAttribute('role', 'none')

    const mobileLink = Link(
      `/index.html#/produkter/${item.slug}`,
      '',
      'flex items-center gap-2 rounded px-3 py-2 text-slate-700 hover:bg-slate-100',
    )
    mobileLink.setAttribute('role', 'menuitem')

    const mobileIcon = createIcon(getCategoryIconName(item))
    const mobileText = create('span')
    mobileText.innerText = item.title

    set(mobileIcon, mobileLink)
    set(mobileText, mobileLink)

    set(mobileLink, mobileLi)
    set(mobileLi, mobileMenu)

    const desktopLi = Li('', '')
    const desktopLink = Link(
      `/index.html#/produkter/${item.slug}`,
      '',
      'flex items-center gap-2',
    )

    const desktopIcon = createIcon(getCategoryIconName(item))
    const desktopText = create('span')
    desktopText.innerText = item.title

    set(desktopIcon, desktopLink)
    set(desktopText, desktopLink)

    set(desktopLink, desktopLi)
    set(desktopLi, desktopMenu)
  })

  const closeMenu = () => {
    mobileMenu.classList.add('hidden')
  }

  toggleButton.addEventListener('click', (event) => {
    event.stopPropagation()
    const isHidden = mobileMenu.classList.contains('hidden')

    if (isHidden) {
      mobileMenu.classList.remove('hidden')
      return
    }

    closeMenu()
  })

  mobileMenu.addEventListener('click', () => closeMenu())

  document.addEventListener('click', (event) => {
    if (!mobileWrapper.contains(event.target)) {
      closeMenu()
    }
  })

  set(toggleButton, mobileWrapper)
  set(mobileMenu, mobileWrapper)
  set([backArrowButton, mobileWrapper, desktopMenu], nav)
}

export default renderNav
