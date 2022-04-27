export const actionsTypes = {
  HANDLE_INPUT: 'HANDLE_INPUT',
  TOOGLE_SHOW_PASSWORD: 'TOOGLE_SHOW_PASSWORD'
}

export const initialState = {
  email: '',
  password: '',
  passwordConfirmation: '',
  showPassword: false
}

export function reducer (state, { type, payload }) {
  switch (type) {
    case actionsTypes.HANDLE_INPUT:
      return { ...state, [payload.name]: payload.value }
    case actionsTypes.TOOGLE_SHOW_PASSWORD:
      return { ...state, showPassword: !state.showPassword }
    default:
      return { ...state }
  }
}
