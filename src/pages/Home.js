import React from 'react'

import { ListOfCategories } from '@components/ListOfCategories'
import { ListOfPhotoCards } from '@containers/ListOfPhotoCards'

export function HomePage () {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}
