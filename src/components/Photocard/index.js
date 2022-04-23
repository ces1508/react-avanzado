import React from 'react'
import { Button, Image, WrapperImage, ArticleStyled } from './styled'
import { MdFavoriteBorder } from 'react-icons/md'
import { useNearScreen } from '../../hooks/useNearScreen'
const DEFUALT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, src = DEFUALT_IMAGE, likes = 0 }) => {
  const { elementRef: element, visible } = useNearScreen()
  return (
    <ArticleStyled ref={element}>
      {!!visible && (
        <>
          <a href={`/detail/${id}`}>
            <WrapperImage>
              <Image src={src} />
            </WrapperImage>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Button>
        </>
      )}
    </ArticleStyled>
  )
}
