import { getCategoryList } from '../models/categoryModel.js'
import renderNav from '../views/partials/navView.js'

const navController = async () => {
  const data = await getCategoryList()
  renderNav(data)
}

export default navController
