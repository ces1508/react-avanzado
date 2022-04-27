import React from 'react'
import { Link } from 'react-router-dom'
import { Image, WrapperImage, ArticleStyled } from './styled'

import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useLikePhoto } from '../../hooks/useLikePhoto'

const DEFUALT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({ id, src = DEFUALT_IMAGE, likes = 0 }) => {
  const [liked, toogleLiked] = useLikePhoto(id)
  const { elementRef: element, visible } = useNearScreen()

  const handleFavorite = () => {
    toogleLiked()
  }

  return (
    <ArticleStyled ref={element}>
      {!!visible && (
        <>
          <Link to={`/${id}`}>
            <WrapperImage>
              <Image src={src} />
            </WrapperImage>
          </Link>
          <FavButton onClick={handleFavorite} liked={liked} likes={likes} />

        </>
      )}
    </ArticleStyled>
  )
}

export { PhotoCard }
