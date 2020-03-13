import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index.jsx'
import { ListOfPhotoCards } from './containers/ListofPhotoCards.jsx'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery.jsx'
import { Logo } from './components/Logo/index.jsx'
import { GlobalStyle } from './components/styles/GlobalStyles'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyle /> <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={2} />
        </>
      )}
    </div>
  )
}
