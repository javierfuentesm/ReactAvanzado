import React from 'react'

import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery.jsx'
import { Logo } from './components/Logo/index.jsx'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Home } from './pages/Home.jsx'
import { Router } from '@reach/router'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyle /> <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
        </Router>
      )}
    </div>
  )
}
