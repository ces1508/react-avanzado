import React from 'react'
import { InputStyled, InputWrapper } from './styled'

export const Input = ({ name, value, onChange, type = 'text', label = '' } = {}) => {
  return (
    <InputWrapper htmlFor={name}>
      {label}
      <InputStyled
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    </InputWrapper>
  )
}
