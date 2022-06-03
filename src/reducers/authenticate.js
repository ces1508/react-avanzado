const AUTHENTICATE_ACTION_TYPES = {
  authencated: 'SUCCESS_AUTH',
  logout: 'ERROR_AUTH',
  reset: 'RESET_AUTH'
}

const intialState = {
  isAuth: false,
  token: null
}

function reducer (state, { type, payload }) {
  switch (type) {
    case AUTHENTICATE_ACTION_TYPES.authencated:
      return {
        isAuth: true,
        token: payload.token
      }
    case AUTHENTICATE_ACTION_TYPES.logout:
      return {
        ...intialState
      }
    case AUTHENTICATE_ACTION_TYPES.reset: {
      return { ...intialState }
    }
    default:
      return { ...state }
  }
}

export {
  reducer,
  intialState,
  AUTHENTICATE_ACTION_TYPES
}
