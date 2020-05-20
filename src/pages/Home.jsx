import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index.jsx'
import { ListOfPhotoCards } from '../containers/ListofPhotoCards.jsx'
import { Layout } from '../components/Layout/index.jsx'

export const Home = ({ id }) => {
  return (
    <>
      <Layout
        title='Petgram tu app de fotos de mascota'
        subtitle='Con petgram puedes encontrar fotos de animales domesticos muy bonitos '
      >
        <ListOfCategories />
        <ListOfPhotoCards categoryId={id} />
      </Layout>
    </>
  )
}
