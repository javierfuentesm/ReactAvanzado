import React from 'react'
import { FavsWithQuery } from '../containers/GetFavorites.jsx'
import { Layout } from '../components/Layout/index.jsx'
export const Favs = () => (
  <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
