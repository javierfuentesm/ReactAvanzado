import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index.jsx'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index.jsx'
import { GlobalStyle } from './GlobalStyles'
export const App = () => <div><GlobalStyle /><ListOfCategories /><ListOfPhotoCards /> </div>
