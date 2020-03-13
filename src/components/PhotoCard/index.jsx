import React from 'react'
import { Button, Img, ImgWrapper, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage.jsx'
import { useNearScreen } from '../../hooks/useNearScreen.jsx'
import { useHover } from '../../hooks/useHover.jsx'
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, liked }) => {
  const key = `like-${id}`
  const [liked2, setLiked] = useLocalStorage(key, liked)
  const [show, ref] = useNearScreen()
  const [over, setOver] = useHover()

  const Icon = liked2 ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button
            onMouseEnter={() => setOver(true)}
            onMouseLeave={() => setOver()}
            isOver={over}
            onClick={() => setLiked(!liked2)}
          >
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
