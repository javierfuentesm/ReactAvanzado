import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index.jsx'
import { ListOfPhotoCards } from '../containers/ListofPhotoCards.jsx'
import { Helmet } from 'react-helmet'
export const Home = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram tu app de fotos de mascotas</title>
        <meta name='description' content='Con petgram puedes encontrar fotos de animales domesticos muy bonitos ' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
