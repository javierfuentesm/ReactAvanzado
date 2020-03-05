import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index.jsx'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index.jsx'
import { Logo } from './components/Logo/index.jsx'
import { GlobalStyle } from './components/styles/GlobalStyles'
export const App = () => <div><GlobalStyle /> <Logo /> <ListOfCategories /><ListOfPhotoCards /> </div>
