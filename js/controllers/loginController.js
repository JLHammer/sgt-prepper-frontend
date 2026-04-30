import { Authenticate } from '../models/loginModel.js'
import { isLoggedIn, logout } from '../utils/auth.js'
import { setCookie } from '../utils/cookies.js'
import { LoginButton } from '../views/components/molecules/loginButton.js'
import renderLoginPage from '../views/pages/loginView.js'

export const loginController = () => {
  renderLoginPage(handleLogin)
}
export const handleLogin = async (e) => {
  e.preventDefault()
  const form = e.currentTarget
  const username = form.username.value.trim()
  const password = form.password.value
  console.log('Attempting login with:', username)
  try {
    const data = await Authenticate(username, password)
    console.log('Authenticate returned:', data)
    setCookie('sgtprepper_token', JSON.stringify(data))
    console.log('Cookie after set:', document.cookie)
    location.href = '/index.html'
  } catch (error) {
    console.error(`Login failed: ${error}`)
  }
}
export const renderLoginButton = async () => {
  const loggedIn = await isLoggedIn()
  const buttonText = loggedIn ? 'Log out' : 'Log in'
  const handleClick = () => {
    if (loggedIn) {
      logout()
      location.reload()
    } else {
      window.location.href = '/index.html#/login'
    }
  }

  return LoginButton(buttonText, handleClick)
}
