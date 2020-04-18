import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import React from 'react'

const LOGIN = gql`
  mutation signup($input: UserCredentials!) {
    login(input: $input)
  }
`
export const LoginMutation = ({ children }) => {
  return (
    <Mutation mutation={LOGIN}>
      {children}
    </Mutation>
  )
}
