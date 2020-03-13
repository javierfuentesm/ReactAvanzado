import React from 'react'
import { PhotoCard } from '../components/PhotoCard/index.jsx'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      likes
      liked
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {({ loading, error, data = { photo: {} } }) => {
      const { photo = {} } = data
      return <PhotoCard {...photo} />
    }}
  </Query>
)
