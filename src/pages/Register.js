import React, { useContext } from 'react'
import { FORM_TYPES } from '@constants/form.model'
import { AuthContext } from '@context/auth'
import { LoginRegisterForm } from '@components/RegisterLoginForm'
import { Anchor } from '@components/Anchor'
import { Centered } from '@components/Centered'

const RegisterPage = () => {
  const {
    handleSignUp: handleSubmit,
    registerSubmiting: loading
  } = useContext(AuthContext)
  return (
    <>
      <LoginRegisterForm
        type={FORM_TYPES.signUp}
        isSubmitting={loading}
        onSubmit={handleSubmit}
      />
      <Anchor path='/login'>
        <Centered>
          ya tienes cuenta, ingresa aqui
        </Centered>
      </Anchor>
    </>
  )
}

export { RegisterPage }
