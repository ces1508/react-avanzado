import styled, { css } from 'styled-components'

import { translateYTo } from '../../styles/animations'
const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  justify-content: flex-start;
  padding: 5px 0;
  ${props => props.fixed && css`
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    padding: 5px;
    margin: 0 auto;
    max-width: 400px;
    transform: scale(.5);

  `}
`

const ListAnimatedWrapper = styled.div`
    position: fixed;
    right: 0;
    top: -20px;
    ${translateYTo({ initialPosition: '-10vh', endPosition: '0', time: '1s', type: 'ease-out', delay: '0s' })}
    left: 0;
    z-index: 1;
`

const Item = styled.li`
  padding: 0 8px;
`

export { List, Item, ListAnimatedWrapper }
