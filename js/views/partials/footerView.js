import { get, set } from '../../utils/dom.js'

export const renderFooter = async () => {
  const footer = get('#footer')
  footer.innerText = 'Footer'
}
