import styled, { css } from 'styled-components'

const InputWrapper = styled.label`
  width: 100%;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 3px;
  ${props => props.error && css`
    color: red;
  `}
`

const InputWithIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 8px;
  border: 1px solid #d8d8d8;
  height: 50px;
  overflow: hidden;
`

const InputStyled = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 0 10px;
  flex: 1;

  ${props => props.error && css`
    color: red;
  `}
`

const InputRightSlot = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Hint = styled.small`
  color: red;
  font-size: .8rem;
  text-transform: lowercase;
  &::first-letter {
    text-transform: uppercase;
  }
`
export {
  InputWrapper,
  InputStyled,
  Hint,
  InputRightSlot,
  InputWithIconWrapper
}
