import { get, set } from '../../utils/index.js'

const renderFooter = async () => {
  const footer = get('#footer')
  footer.innerText = 'Footer'
}

export default renderFooter
