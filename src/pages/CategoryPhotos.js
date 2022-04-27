import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

const CategoryPhotosPage = () => {
  const { categoryId } = useParams()
  return (
    <ListOfPhotoCards categoryId={categoryId} />
  )
}

export { CategoryPhotosPage }
