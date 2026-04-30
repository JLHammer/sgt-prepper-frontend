import { Button } from '../atoms'

export const LoginButton = (text = 'Log in', handleClick) => {
  return Button({
    text,
    type: 'button',
    event: 'click',
    func: handleClick,
    className: 'login-button',
  })
}
