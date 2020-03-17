import React from 'react'
import { Logo } from './components/Logo/index.jsx'
import { NavBar } from './components/NavBar/index.jsx'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Home } from './pages/Home.jsx'
import { Favs } from './pages/Favs.jsx'
import { NotRegisteredUser } from './pages/NotRegisteredUser.jsx'
import { User } from './pages/User.jsx'
import { Detail } from './pages/Detail.jsx'
import { Router } from '@reach/router'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
export const App = () => {
  return (
    <div>
      <GlobalStyle /> <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='detail/:detailId' />
      </Router>
      <UserLogged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
            </Router>
          )}
      </UserLogged>
      <NavBar />
    </div>
  )
}
