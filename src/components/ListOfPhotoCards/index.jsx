import React from 'react'
import { PhotoCard } from '../PhotoCard/index.jsx'

export const ListOfPhotoCards = () => (
  <ul>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
      <PhotoCard key={item} id={item} />
    ))}
  </ul>
)
