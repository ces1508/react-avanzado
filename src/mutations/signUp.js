import { gql } from '@apollo/client'

const SIGNUP_MUTATION = gql`
  mutation signup ($registerParams: UserCredentials!) {
    signup (input: $registerParams)
  }
`

export { SIGNUP_MUTATION }
