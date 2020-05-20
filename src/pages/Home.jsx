import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index.jsx'
import { ListOfPhotoCards } from '../containers/ListofPhotoCards.jsx'
import { Layout } from '../components/Layout/index.jsx'

const HomePage = ({ id }) => {
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
export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
