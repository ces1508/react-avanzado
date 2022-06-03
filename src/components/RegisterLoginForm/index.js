import React from 'react'
import { Formik } from 'formik'
import { useLoginRegisterForm } from '../../hooks/useLoginRegisterForm'
import { Form } from '../Form'
import { FORM_TYPES } from '../../constants/form.model'
import { Input, InputPassword } from '../Input'
import { ShowPasswordIcon } from '../ShowPasswordIcon'
import {
  registerFomValidations,
  signinFormValidatios,
  defaultRegisterValues,
  defualtLoginValues
} from '../../utils/formValidations'
import { Button } from '../Button'

const LoginRegisterForm = ({
  type = FORM_TYPES.signIn,
  onSubmit,
  isSubmitting = false
}) => {
  const { handleTogglePassword, state } = useLoginRegisterForm()
  const { showPassword } = state
  const typeInput = showPassword ? 'text' : 'password'
  const handleSubmit = (data, { setSubmitting }) => {
    setSubmitting(true)
    onSubmit(data)
  }

  const intialValue = type === FORM_TYPES.signIn ? defualtLoginValues : defaultRegisterValues
  const validations = type === FORM_TYPES.signIn ? signinFormValidatios : registerFomValidations

  return (
    <Formik
      initialValues={intialValue}
      validationSchema={validations}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <Form onSubmit={handleSubmit}>
          <Input
            label='Correo Electronico'
            name='email'
            value={values.email}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            errorMessage={errors.email}
            onChange={handleChange}
          />
          <InputPassword
            label='Contrasenia'
            name='password'
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.password && touched.password}
            errorMessage={errors.password}
            type={typeInput}
            rightComponent={() => (
              <ShowPasswordIcon onClick={handleTogglePassword} seeing={showPassword} />
            )}
          />
          {type === FORM_TYPES.signUp && (
            <InputPassword
              label='Confirma tu Contrasenia'
              name='passwordConfirmation'
              value={values.passwordConfirmation}
              type={typeInput}
              onBlur={handleBlur}
              onChange={handleChange}
              error={
                errors.passwordConfirmation && touched.passwordConfirmation
              }
              rightComponent={() => (
                <ShowPasswordIcon onClick={handleTogglePassword} seeing={showPassword} />
              )}
              errorMessage={errors.passwordConfirmation}
            />
          )}
          <Button type='submit'>
            {isSubmitting ? '...creando cuenta' : 'Crear cuenta'}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export { LoginRegisterForm }
