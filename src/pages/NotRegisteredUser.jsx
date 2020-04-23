import React, { useContext } from 'react'
import { Context } from '../Context.jsx'
import { UserForm } from '../components/UserForm/index.jsx'
import { RegisterMutation } from '../containers/RegisterMutation.jsx'
import { LoginMutation } from '../containers/LoginMutation.jsx'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = async ({ email, password }) => {
            const input = { email, password }
            const variables = { input }

            try {
              const {
                data: { signup }
              } = await register({ variables })
              activateAuth(signup)
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
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = async ({ email, password }) => {
            const input = { email, password }
            const variables = { input }

            try {
              const {
                data: { login: login2 }
              } = await login({ variables })
              activateAuth(login2)
            } catch (error) {
              console.error(error)
            }
          }
          const errorMsg = error && 'Los datos ingresados no son correctos'

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title='Inicia Sesión'
            />
          )
        }}
      </LoginMutation>
    </>
  )
}
