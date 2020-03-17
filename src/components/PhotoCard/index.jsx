import React from 'react'
import { Img, ImgWrapper, Article } from './styles'
import { Link } from '@reach/router'
import { FavButton } from '../FavButton/index.jsx'
import { useNearScreen } from '../../hooks/useNearScreen.jsx'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation.jsx'
import { useLocalStorage } from '../../hooks/useLocalStorage.jsx'
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, liked }) => {
  const key = `like-${id}`
  const [liked2, setLiked] = useLocalStorage(key, liked)
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {toggleLike => {
              const handleFavClick = () => {
                !liked2 && toggleLike({ variables: { input: { id } } })
                setLiked(!liked2)
              }

              return (
                <FavButton
                  liked={liked2}
                  likes={likes}
                  onClick={handleFavClick}
                />
              )
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  )
}
