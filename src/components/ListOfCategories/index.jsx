import React, { useState, useEffect, useRef } from 'react'
import { Category } from '../Category/index.jsx'
import { List, Item } from './styles'
import LoadingBar from 'react-top-loading-bar'

// Uso de custom hook

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const fetchdata = async () => {
      const response = await window.fetch(
        'https://petgram-server.javierfuentesm.now.sh/categories'
      )
      const data = await response.json()
      setCategories(data)
      setLoading(false)
    }
    fetchdata()
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
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
