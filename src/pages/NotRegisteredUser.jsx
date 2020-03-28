import React from 'react'
import Context from '../Context.jsx'
import { UserForm } from '../components/UserForm/index.jsx'
export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return <UserForm onSubmit={activateAuth} />
    }}
  </Context.Consumer>
)
