import React from 'react'
import { Button } from './styles'
import { useHover } from '../../hooks/useHover.jsx'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavButton = ({ liked, onClick, likes }) => {
  const [over, setOver] = useHover()

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver()}
      isOver={over}
      onClick={onClick}
    >
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}
