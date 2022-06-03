import { useReducer, useCallback } from 'react'
import { useMutation } from '@apollo/client'
import {
  AUTHENTICATE_ACTION_TYPES,
  intialState,
  reducer
} from '../reducers/authenticate'
import { SINGIN_MUTATION } from '../mutations/signIn'
import { SIGNUP_MUTATION } from '../mutations/signUp'
import { useNavigate } from 'react-router-dom'

function useAuthenticate () {
  const [state, dispatch] = useReducer(reducer, intialState)
  const navigate = useNavigate()
  const [setLogin, { loading: loginSubmiting }] = useMutation(SINGIN_MUTATION)
  const [setRegister, { loading: registerSubmiting }] =
    useMutation(SIGNUP_MUTATION)

  const handleLogin = useCallback((data) => {
    setLogin({
      variables: {
        input: {
          ...data
        }
      }
    })
      .then((response) => {
        const token = response.data.token
        login(token)
      })
      .catch((error) => console.log('error realizando el login ', error))
  }, [])

  const login = (token) => {
    window.sessionStorage.setItem('@token', token)
    dispatch({
      type: AUTHENTICATE_ACTION_TYPES.authencated,
      payload: { token }
    })
  }

  const logout = () => dispatch({ type: AUTHENTICATE_ACTION_TYPES.logout })
  const handleLogout = useCallback(() => {
    window.sessionStorage.removeItem('@token')
    logout()
  })

  const handleSignUp = useCallback((data) => {
    setRegister({
      variables: {
        registerParams: {
          email: data.email,
          password: data.password
        }
      }
    }).then((token) => {
      login(token.data.signup)
      navigate('/')
    })
  }, [])

  return {
    state,
    handleLogin,
    handleLogout,
    handleSignUp,
    registerSubmiting,
    loginSubmiting
  }
}

export { useAuthenticate }
