import React, { useCallback, useContext } from 'react'
import { useMutation } from '@apollo/client'
import { FORM_TYPES } from '@constants/form.model'
import { AuthContext } from '@context/auth'
import { SINGIN_MUTATION } from '@mutations/signIn'
import { LoginRegisterForm } from '@components/RegisterLoginForm'
import { Anchor } from '@components/Anchor'
import { Centered } from '@components/Centered'

const LoginPage = () => {
  const { login } = useContext(AuthContext)
  const [setLogin] = useMutation(SINGIN_MUTATION)
  const handleSubmit = useCallback((data) => {
    const executeMutation = async () => {
      const token = await setLogin({
        variables: {
          input: {
            ...data
          }
        }
      })
      login(token.data.login)
    }
    executeMutation().catch((error) => console.log(error))
  }, [])
  return (
    <div>
      <LoginRegisterForm type={FORM_TYPES.signIn} onSubmit={handleSubmit} />
      <Centered>
        <Anchor path='/register'>
          un no tienes cuenta, que esperar para registrarte
        </Anchor>
      </Centered>
    </div>
  )
}

export { LoginPage }
