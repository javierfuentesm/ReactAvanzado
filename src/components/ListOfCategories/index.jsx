import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index.jsx'
import { List, Item } from './styles'
import LoadingBar from 'react-top-loading-bar'
import { useFetch } from '../../hooks/useFetch.jsx'

// Uso de custom hook

export const ListOfCategories = () => {
  const { data: categories, loading } = useFetch('https://petgram-server.javierfuentesm.now.sh/categories')
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fixed => (
    <List fixed={fixed}>
      {categories.map(item => (
        <Item key={item.id}>
          <Category {...item} />
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {loading ? (
        <>
          <LoadingBar height={5} color='#48D1CC' progress={100} />
        </>
      ) : (
        <>
          {renderList()} {showFixed && renderList(true)}
        </>
      )}
    </>
  )
}
