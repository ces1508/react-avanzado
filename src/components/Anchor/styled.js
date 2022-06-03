import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const baseAnchor = () => css`
  color: var(--color-primary-bg);
  font-size: 1rem;
  text-align: ${props => props.align};
`
const InternalAnchorStyled = styled(Link)`
 ${baseAnchor()}
`

const RemoteAnchor = styled.a`
  ${baseAnchor()}
`

export { InternalAnchorStyled, RemoteAnchor }
