import { get, set } from '../../utils/dom.js'
import { Li, Ul, Link } from '../components/atoms/index.js'
import { createIcon } from '../../utils/icons.js'

const CATEGORY_ICON_BY_SLUG = {
  'vand-og-vandrensning': 'Droplet',
  'mad-og-langtidsopbevaring': 'UtensilsCrossed',
  'energi-og-belysning': 'Lightbulb',
  'forstehjaelp-og-sundhed': 'HeartPulse',
  'kommunikation-og-navigation': 'Compass',
}

const getCategoryIconName = (item) => {
  const slug = (item?.slug || '').toLowerCase()
  return CATEGORY_ICON_BY_SLUG[slug] || 'Package'
}

const renderNav = async (data) => {
  const nav = get('#nav')
  nav.innerHTML = ''

  const mobileWrapper = document.createElement('div')
  mobileWrapper.className = 'relative inline-block md:hidden'

  const toggleButton = document.createElement('button')
  toggleButton.type = 'button'
  toggleButton.className =
    'flex items-center gap-2 rounded bg-slate-600 px-3 py-2 text-white hover:bg-slate-700'

  const menuIcon = createIcon('Menu')
  const menuLabel = document.createElement('span')
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
    const mobileText = document.createElement('span')
    mobileText.innerText = item.title

    set(mobileIcon, mobileLink)
    set(mobileText, mobileLink)

    set(mobileLink, mobileLi)
    set(mobileLi, mobileMenu)

    const desktopLi = Li('', '')
    const desktopLink = Link(
      `/index.html#/produkter/${item.slug}`,
      '',
      'flex items-center gap-2 text-blue-500 hover:text-blue-700',
    )

    const desktopIcon = createIcon(getCategoryIconName(item))
    const desktopText = document.createElement('span')
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
  set(mobileWrapper, nav)
  set(desktopMenu, nav)
}

export default renderNav
