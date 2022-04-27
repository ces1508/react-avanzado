import React from 'react'
import { Button } from '../components/Button'
import { Form } from '../components/Form'
import { Input } from '../components/Input'
import { useLoginRegisterForm } from '../hooks/useLoginRegisterForm'

const RegisterPage = () => {
  const { handleInput, handleTogglePassword, state } = useLoginRegisterForm()
  const { email, password, passwordConfirmation, showPassword } = state
  const typeInput = showPassword ? 'text' : 'password'

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = { email, password }
    console.log('data es ', data)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label='Correo Electronico'
        name='email'
        value={email}
        onChange={handleInput}
      />
      <Input
        label='Contrasenia'
        name='password'
        value={password}
        onChange={handleInput}
        type={typeInput}
      />
      <Input
        label='Confirma tu Contrasenia'
        name='passwordConfirmation'
        value={passwordConfirmation}
        type={typeInput}
        onChange={handleInput}
      />
      <div onClick={handleTogglePassword}>mostar contras</div>
      <Button type='submit'>Crear cuenta</Button>
    </Form>
  )
}

export { RegisterPage }
