import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryItem, CategoryImage } from './styled.js'

const DEFUALT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFUALT_IMAGE, path, emoji = '?', id }) => {
  return (
    <Link to={`/category/${id}`}>
      <CategoryItem>
        <CategoryImage src={cover} />
        {emoji}
      </CategoryItem>
    </Link>
  )
}
