import React from 'react'
import { PhotoCard } from '../photocard'

function ListOfPhotoCard () {
  return (
    <div>
      {[1, 2, 3].map(card => <PhotoCard key={card} />)}
    </div>
  )
}

export { ListOfPhotoCard }
