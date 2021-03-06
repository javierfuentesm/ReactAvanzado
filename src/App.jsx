import React, { useContext, Suspense } from 'react'
import { Context } from './Context.jsx'
import { Logo } from './components/Logo/index.jsx'
import { NavBar } from './components/NavBar/index.jsx'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
/* import { Favs } from './pages/Favs.jsx'
 */
import { NotRegisteredUser } from './pages/NotRegisteredUser.jsx'
import { User } from './pages/User.jsx'
import { Detail } from './pages/Detail.jsx'
import { Router, Redirect } from '@reach/router'

const Favs = React.lazy(() => import('./pages/Favs.jsx'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle /> <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
