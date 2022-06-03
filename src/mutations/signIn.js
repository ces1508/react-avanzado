import { gql } from '@apollo/client'

const SINGIN_MUTATION = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export { SINGIN_MUTATION }
