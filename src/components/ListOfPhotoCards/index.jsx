import React from 'react'
import { PhotoCard } from '../PhotoCard/index.jsx'

export const ListOfPhotoCardsComponent = ({ data: { photos = [], loading } } = {}) => (
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
