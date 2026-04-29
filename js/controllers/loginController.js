// import { Authenticate } from '..models/loginModel.js'
// import { isLoggedIn, logout } from '../utils/auth.js'
// import { setCookie } from '../utils/cookies.js'
// import { createLoginButton } from '../views/components/molecules/loginButton.js'
// import renderLoginPage from '../views/pages/loginView.js'
// import { set } from '../utils/dom.js'

// export const loginController = () => {
//   // renderLoginPage(handleLogin)
// }

// export const handleLogin = async (e) => {
//   e.preventDefault()

//   const form = e.currentTarget

//   const username = form.username.value.trim()
//   const password = form.password.value

//   try {
//     const data = await Authenticate(username, password)
//     setCookie('sgtprepper_token', JSON.stringify(data))
//     location.href = '/index.html'
//   } catch (error) {
//     console.error(`Login failed: ${error}`)
//   }
// }

// export const renderLoginButton = async () => {
//   const loggedIn = await isLoggedIn()
//   const buttonText = loggedIn ? 'Log out' : 'Log in'

//   const handleClick = () => {
//     if (loggedIn) {
//       logout()
//       location.reload()
//     } else {
//       window.location.href = '/index.html#/login'
//     }
//   }
//   return createLoginButton(buttonText, handleClick)
// }
