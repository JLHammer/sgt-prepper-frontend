import { Heading } from '../components/atoms/index.js'
import { get, set } from '../../utils/index.js'

export const renderHeader = () => {
  const header = get('#header')
  const h1 = Heading(1, 'Sgt. Prepper', 'text-2xl font-bold')
  set(h1, header)
  
}
