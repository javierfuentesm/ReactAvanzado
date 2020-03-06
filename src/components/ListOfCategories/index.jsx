import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index.jsx'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    const fetchdata = async () => {
      const response = await window.fetch(
        'https://petgram-server.javierfuentesm.now.sh/categories'
      )
      const data = await response.json()
      setCategories(data)
    }
    fetchdata()
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fixed => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map(item => (
        <Item key={item.id}>
          <Category {...item} />
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {renderList()} {showFixed && renderList(true)}
    </>
  )
}
