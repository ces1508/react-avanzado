import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

const ArticleStyled = styled.article`
  min-height: 200px;
`

const WrapperImage = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0; // relacion 16:9
  position: relative;
  width: 100%;
`

const Image = styled.img`
  ${fadeIn({ time: '2s' })}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
  }
`

export default Button

export { WrapperImage, Image, Button, ArticleStyled }
