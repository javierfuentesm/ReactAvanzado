import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index.jsx'
import { ListOfPhotoCards } from '../containers/ListofPhotoCards.jsx'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
