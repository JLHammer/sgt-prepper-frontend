import { set } from '../../../utils/dom'
import { Div, Input, Label } from '../atoms'

export const FormGroup = (label, type, name, placeholder, value, classes) => {
  const div = Div(`${name}-form-group-wrapper`)
  const labelEl = Label(label, name, `${name}-label`)
  const inputEl = Input(type, name, placeholder, value, 'on', `${name}-input`)

  set([labelEl, inputEl], div)

  return div
}
