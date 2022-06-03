import { object, string, ref } from 'yup'

const defualtLoginValues = {
  email: '',
  password: ''
}

const defaultRegisterValues = {
  ...defualtLoginValues,
  passwordConfirmation: ''
}

const basicForm = {
  email: string()
    .required('El email es requerido')
    .email('Debes ingeresar una direccion de correo valida'),
  password: string()
    .defined('Debes tener una contraseña')
    .min(6, 'La contraseña no debe tener menos de 6 caracteres')
}

const registerFomValidations = object({
  ...basicForm,
  passwordConfirmation: string()
    .required('La confirmacon de contraseña no puede ser vacio')
    .oneOf([ref('password'), null], 'Las contraseñas no coinciden')
})

const signinFormValidatios = object({
  ...basicForm
})

export {
  registerFomValidations,
  signinFormValidatios,
  defualtLoginValues,
  defaultRegisterValues
}
