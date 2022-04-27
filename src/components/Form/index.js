import React from 'react'
import { FormStyled } from './styled'

export const Form = ({ onSubmit, children }) => {
  return (
    <FormStyled onSubmit={onSubmit}>
      {children}
    </FormStyled>
  )
}
