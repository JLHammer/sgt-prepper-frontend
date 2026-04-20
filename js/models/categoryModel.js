import { request } from '../utils/http.js'

const url = 'http://localhost:4000/api/categories'

export const getCategoryList = async () => {
  try {
    const data = await request(url)
    return data
  } catch (error) {
    throw new Error('Request error on category list', { cause: error })
  }
}
