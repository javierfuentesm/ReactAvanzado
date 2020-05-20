import React from 'react'

import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery.jsx'
import { Layout } from '../components/Layout/index.jsx'

export const Detail = ({ detailId }) => (
  <Layout title={`Fotografia ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
