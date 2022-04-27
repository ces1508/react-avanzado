import React from 'react'
import { PhotoCard } from '../Photocard'

function ListOfPhotoCard ({ photos }) {
  return (
    <div>
      {photos.map(card => <PhotoCard key={card.id} {...card} />)}
    </div>
  )
}

export { ListOfPhotoCard }
