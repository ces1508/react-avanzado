import { useReducer } from 'react'
import { reducer, initialState, actionsTypes } from '../reducers/register'

function useLoginRegisterForm () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleInput = (event) => {
    const { name, value } = event.target
    dispatch({ type: actionsTypes.HANDLE_INPUT, payload: { name, value } })
  }

  const handleTogglePassword = () => {
    dispatch({ type: actionsTypes.TOOGLE_SHOW_PASSWORD })
  }

  return {
    state,
    handleInput,
    handleTogglePassword
  }
}

export { useLoginRegisterForm }
