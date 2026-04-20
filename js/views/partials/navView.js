import { get, set } from '../../utils/dom.js'
import { Li, Ul, Link } from '../components/atoms/index.js'

const renderNav = async (data) => {
  const nav = get('#nav')

  const ul = Ul('flex')

  data.map((item) => {
    const li = Li('', 'mr-6')

    const a = Link(
      `/index.html#/produkter/${item.slug}`,
      item.title,
      'text-blue-500 hover:text-blue-700',
    )
    a.innerText = item.title

    set(a, li)
    set(li, ul)
  })
  set(ul, nav)
}

export default renderNav
