import styled, { css } from 'styled-components'

export const ButtonStyled = styled.button`
  padding: 10px;
  border-radius: 16px;
  &:hover {
    cursor: pointer;
  }
  ${props => props.rounded && css`
    border-radius: 30%;
  `}
  ${props => props.primary && css`
      background: var(--primary-color-bg);
      color: var(--primary-color-text);
  `}

`
