import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

const CategoryImage = styled.img`
  ${fadeIn()}
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`

export {
  CategoryItem,
  CategoryImage
}
