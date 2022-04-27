import { gql } from '@apollo/client'
const QUERY_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos (categoryId: $categoryId) {
      id,
      src,
      likes,
      categoryId,
      liked
    }
  }
`

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto ($id: ID!) {
  photo (id: $id) {
    id,
    categoryId,
    src,
    likes,
    liked,
    userId
  }
}
`

export {
  QUERY_PHOTOS,
  GET_SINGLE_PHOTO
}
