import './Home.css'
import { useActionState, useState } from 'react'
import { Login } from '../Login/Login'
import { Register } from '../Register/Register'
import { AuthLayout } from '../AuthLayout/AuthLayout'
import { useLogin, useRegister } from '../../hooks'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useAuthStore } from '../../store/auth.store'
import { Redirect } from 'wouter'

import { useText } from '@/features/langs/hooks/useText'
import { homeText } from './Home.langs'
import { isAxiosError } from 'axios'

export const Home = () => {
  const text = useText(homeText)
  const [isRegisterMode, setIsRegisterMode] = useState(false)
  const { mutateAsync: registerUser } = useRegister()
  const { mutateAsync: loginUser } = useLogin()
  const user = useAuthStore(state => state.user)
  const title = isRegisterMode ? text.signup() : text.login()

  const [error, handleSubmit] = useActionState(
    async (_prev: string | null, formData: FormData) => {
      try {
        const data = Object.fromEntries(formData) as {
          username: string
          password: string
        }
        await (isRegisterMode ? registerUser : loginUser)(data)
        return null
      } catch (e) {
        return isAxiosError(e)
          ? String(e.response?.data?.message ?? e.message)
          : 'Error'
      }
    },
    null,
  )

  if (user) {
    return <Redirect to={'/campaigns'} />
  }

  return (
    <div className="cmp-home">
      <header className="header">
        <Icon icon="fa-solid fa-gear" />
      </header>
      <div className="content">
        <div className="info-section">
          <span className="eyebrow">Dungeons and Dragons</span>
          <h1>{text.title()}</h1>
          <p>{text.description()}</p>
        </div>
        <AuthLayout
          {...{ title, isRegisterMode, setIsRegisterMode, handleSubmit, error }}
        >
          {!isRegisterMode ? <Login /> : <Register />}
        </AuthLayout>
      </div>
    </div>
  )
}
