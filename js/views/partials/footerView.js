import { get, set } from '../../utils/index.js'

export const renderFooter = async () => {
  const footer = get('#footer')
  footer.innerText = 'Footer'
}
