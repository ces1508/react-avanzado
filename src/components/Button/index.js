import React from 'react'
import { ButtonStyled } from './styled'

export function Button ({
  type = 'button',
  onClick = () => null,
  rounded = false,
  primary = true,
  children
} = {}) {
  return (
    <ButtonStyled
      onClick={onClick}
      primary={primary}
      type={type}
      rounded={rounded}
    >
      {children}
    </ButtonStyled>
  )
}
