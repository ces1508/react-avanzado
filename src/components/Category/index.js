import React from 'react'
import { CategoryItem, CategoryImage } from './styled.js'

const DEFUALT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFUALT_IMAGE, path, emoji = '?' }) => {
  return (
    <CategoryItem href={path}>
      <CategoryImage src={cover} />
      {emoji}
    </CategoryItem>
  )
}
