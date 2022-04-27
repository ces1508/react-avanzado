import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styled'

export function FavButton ({ liked, likes, onClick }) {
  const IconFavorite = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={onClick}>
      <IconFavorite size='32px' /> {likes} likes!
    </Button>
  )
}
