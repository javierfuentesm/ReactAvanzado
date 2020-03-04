import React from 'react'
import { Category } from '../Category/index.jsx'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => (
  <List>
    {categories.map(item => (
      <Item key={item}><Category /></Item>
    ))}
  </List>
)
