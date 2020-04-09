import React from 'react'
import Context from '../Context.jsx'
import { UserForm } from '../components/UserForm/index.jsx'
import { RegisterMutation } from '../containers/RegisterMutation.jsx'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <RegisterMutation>
            {(register, { data, loading, error }) => {
              const onSubmit = async ({ email, password }) => {
                const input = { email, password }
                const variables = { input }

                try {
                  await register({ variables })
                  activateAuth()
                } catch (error) {
                  console.error(error)
                }
              }
              const errorMsg =
                error && 'El usuario ya existe se encuentra registrado'

              return (

                <UserForm
                  disabled={loading}
                  error={errorMsg}
                  onSubmit={onSubmit}
                  title='Regístrate'
                />
              )
            }}
          </RegisterMutation>
          <UserForm onSubmit={activateAuth} title='Inicia Sesión' />
        </>
      )
    }}
  </Context.Consumer>
)
