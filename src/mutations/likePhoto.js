import { gql } from '@apollo/client'

const LIKE_ANONYMOUS_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto (input: $input) {
      id,
      liked,
      likes
    }
  }
`

export {
  LIKE_ANONYMOUS_PHOTO
}
