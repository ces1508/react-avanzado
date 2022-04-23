import React from 'react'
import { PhotoCard } from '../photocard'

function ListOfPhotoCard () {
  return (
    <div>
      {[1, 2, 3, 5, 6, 7, 8, 9, 10, 11].map(card => <PhotoCard key={card} />)}
    </div>
  )
}

export { ListOfPhotoCard }
