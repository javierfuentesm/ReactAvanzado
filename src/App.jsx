import React, { useContext } from 'react'
import { Context } from './Context.jsx'
import { Logo } from './components/Logo/index.jsx'
import { NavBar } from './components/NavBar/index.jsx'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Favs } from './pages/Favs.jsx'
import { NotRegisteredUser } from './pages/NotRegisteredUser.jsx'
import { User } from './pages/User.jsx'
import { Detail } from './pages/Detail.jsx'
import { Router, Redirect } from '@reach/router'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <div>
      <GlobalStyle /> <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login ' to='/ ' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </div>
  )
}
