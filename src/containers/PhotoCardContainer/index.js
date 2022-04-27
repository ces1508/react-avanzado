import React from 'react'
import { useQuery } from '@apollo/client'
import { PhotoCard } from '../../components/Photocard'
import { GET_SINGLE_PHOTO } from '../../queries/photos'

const PhotoCardContainer = ({ id = 1 }) => {
  const { data, loading, error } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id
    }
  })
  if (loading) return <p>...cargando</p>
  if (error) return <p>lo sentimos, tenemos problemas para cargar los datos</p>
  return <PhotoCard {...data.photo} />
}

export {
  PhotoCardContainer
}
