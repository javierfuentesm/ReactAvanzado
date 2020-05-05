import React, { useContext } from 'react'
import { Context } from '../Context.jsx'
import { SubmitButton } from '../components/SubmitButton/index.jsx'
export const User = () => {
  const { removeAuth } = useContext(Context)

  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
