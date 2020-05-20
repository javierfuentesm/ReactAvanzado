import React from 'react'
import { FavsWithQuery } from '../containers/GetFavorites.jsx'
import { Layout } from '../components/Layout/index.jsx'
export default () => (
  <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
