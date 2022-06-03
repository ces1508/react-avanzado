import React from 'react'
import {
  InputStyled,
  InputWrapper,
  Hint,
  InputRightSlot,
  InputWithIconWrapper
} from './styled'

export const Input = ({
  name,
  value,
  onChange,
  type = 'text',
  label = '',
  error = false,
  errorMessage = '',
  rightComponent = null
} = {}) => {
  return (
    <InputWrapper htmlFor={name} error={error}>
      {label}
      <InputWithIconWrapper>
        <InputStyled
          error={error}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
        />
        {rightComponent && <InputRightSlot>{rightComponent()}</InputRightSlot>}
      </InputWithIconWrapper>
      {error && <Hint>{errorMessage}</Hint>}
    </InputWrapper>
  )
}
