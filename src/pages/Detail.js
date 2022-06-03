import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardContainer } from '@containers/PhotoCardContainer'

function DetailPage () {
  const params = useParams()

  return (
    <PhotoCardContainer id={params.id} />
  )
}

export { DetailPage }
