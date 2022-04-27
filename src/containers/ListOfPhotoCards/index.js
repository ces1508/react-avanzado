import React from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_PHOTOS } from '../../queries/photos'
import { ListOfPhotoCard } from '../../components/ListOfPhotoCard'

export function ListOfPhotoCards ({ categoryId }) {
  const { loading, error, data } = useQuery(QUERY_PHOTOS, {
    variables: { categoryId }
  })
  if (loading) return <p>cargando ...</p>
  if (error) return <p>lo sentimos, tenemos problemas para obtener la informacion</p>
  return <ListOfPhotoCard photos={data.photos} />
}
