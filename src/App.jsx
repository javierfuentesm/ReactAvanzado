import React from 'react'
import { Logo } from './components/Logo/index.jsx'
import { NavBar } from './components/NavBar/index.jsx'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Home } from './pages/Home.jsx'
import { Detail } from './pages/Detail.jsx'
import { Router } from '@reach/router'
export const App = () => {
  return (
    <div>
      <GlobalStyle /> <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='detail/:detailId' />
      </Router>
      <NavBar />
    </div>
  )
}
