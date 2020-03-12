import React from 'react'
import { PhotoCard } from '../PhotoCard/index.jsx'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)
const ListOfPhotoCardsComponent = ({ data: { photos = [], loading } } = {}) => (
  <>
    {!loading ? (
      <ul>
        {photos.map(photo => (
          <PhotoCard key={photo.id} id={photo.id} likes={photo.likes} src={photo.src} liked={photo.liked} />
        ))}
      </ul>
    ) : (
      <p>Se esta cargando la información espera un momento... </p>
    )}
  </>
)
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
