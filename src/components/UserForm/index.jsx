import React from 'react'
import useForm from '../../hooks/useInputValue.jsx'

import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const { form, handleInput } = useForm({
    email: '',
    password: ''
  })
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: form.email, password: form.password })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          type='email'
          name='email'
          disabled={disabled}
          placeholder='Email'
          onChange={handleInput}
          value={form.email}
        />
        <Input
          type='password'
          name='password'
          disabled={disabled}
          placeholder='Password'
          onChange={handleInput}
          value={form.password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error> {error}</Error>}
    </>
  )
}
