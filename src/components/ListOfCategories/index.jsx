import React from 'react'
import { Category } from '../Category/index.jsx'
import { List, Item } from './styles'

export const ListOfCategories = () => (
  <List>
    {[1, 2, 3, 4, 5, 6, 7].map(item => (
      <Item key={item}><Category /></Item>
    ))}
  </List>
)
