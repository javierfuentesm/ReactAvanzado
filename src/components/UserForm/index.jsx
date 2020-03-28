import React from 'react'
import { useInputValue } from '../../hooks/useInputValue.jsx'

export const UserForm = ({ onSubmit }) => {
  const form = useInputValue({
    email: '',
    password: ''
  })

  return (
    <form onSubmit={onSubmit}>
      <input
        type='email'
        name='email'
        placeholder='Email'
        {...form}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        {...form}
      />
      <button>Iniciar sesion</button>
    </form>
  )
}
