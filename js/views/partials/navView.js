import { create, get, set } from '../../utils/dom.js'
import { Li, Ul, Link, createFragment } from '../components/atoms/index.js'
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

const createNav = async (data) => {
  const nav = createFragment()

  const mobileWrapper = create('div', 'mobile-wrapper')

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

  const mobileMenu = Ul('mobile-menu hidden')
  mobileMenu.setAttribute('role', 'menu')

  const desktopMenu = Ul('desktop-menu')

  data.map((item) => {
    const mobileLi = Li('', '')
    mobileLi.setAttribute('role', 'none')

    const mobileLink = Link(
      `/index.html#/produkter/${item.slug}`,
      '',
      'nav-link mobile-nav-link',
    )
    mobileLink.setAttribute('role', 'menuitem')

    const mobileIcon = createIcon(getCategoryIconName(item))
    const mobileText = create('span')
    mobileText.innerText = item.title

    const desktopLi = Li('', '')
    const desktopLink = Link(
      `/index.html#/produkter/${item.slug}`,
      '',
      'nav-link desktop-nav-link',
    )

    const desktopIcon = createIcon(getCategoryIconName(item))
    const desktopText = create('span')
    desktopText.innerText = item.title

    const currentHash = window.location.hash
    if (currentHash.includes(item.slug)) {
      mobileLink.classList.add('active')
      desktopLink.classList.add('active')
    }

    set(mobileIcon, mobileLink)
    set(mobileText, mobileLink)
    set(mobileLink, mobileLi)
    set(mobileLi, mobileMenu)

    set(desktopIcon, desktopLink)
    set(desktopText, desktopLink)
    set(desktopLink, desktopLi)
    set(desktopLi, desktopMenu)
  })

  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash
    document.querySelectorAll('#nav a').forEach((link) => {
      link.classList.remove('active')
      if (newHash.includes(link.getAttribute('href').split('#/')[1])) {
        link.classList.add('active')
      }
    })
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
  set([mobileWrapper, desktopMenu], nav)

  return nav
}

export default createNav
