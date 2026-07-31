import './Home.css'
import { useState, type SubmitEventHandler } from 'react'
import { Login } from '../Login/Login'
import { Register } from '../Register/Register'
import { AuthLayout } from '../AuthLayout/AuthLayout'
import { parseFormData } from '@/shared/utils'
import { useLogin, useRegister } from '../../hooks'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useAuthStore } from '../../store/auth.store'
import { Redirect } from 'wouter'

import { useText } from '@/features/langs/hooks/useText'
import { homeText } from './Home.langs'
import { useLanguageStore } from '@/features/langs/store/langs.store'

export const Home = () => {
  const text = useText(homeText)
  const setLanguage = useLanguageStore(state => state.setLanguage)
  const [isRegisterMode, setIsRegisterMode] = useState(false)
  const { mutateAsync: registerUser } = useRegister()
  const { mutateAsync: loginUser } = useLogin()
  const user = useAuthStore(state => state.user)
  const title = isRegisterMode ? text.signup() : text.login()

  const handleLogin: SubmitEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = parseFormData(formData, {
      username: 'string',
      password: 'string',
    })

    loginUser(data)
  }

  const handleRegister: SubmitEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = parseFormData(formData, {
      username: 'string',
      password: 'string',
    })
    registerUser(data)
  }

  if (user) {
    return <Redirect to={'/dashboard'} />
  }

  return (
    <div className="cmp-home">
      <header className="header">
        <Icon icon="fa-solid fa-gear" />
      </header>
      <div className="content">
        <div className="info-section">
          <h1>{text.title()}</h1>
          <p>{text.description()}</p>
          <div className="language-selector">
            <button onClick={() => setLanguage('en')}>EN</button>
            <button onClick={() => setLanguage('es')}>ES</button>
          </div>
          <div className="divider" />
        </div>
        <AuthLayout
          {...{ title, isRegisterMode, setIsRegisterMode }}
          handleSubmit={!isRegisterMode ? handleLogin : handleRegister}
        >
          {!isRegisterMode ? <Login /> : <Register />}
        </AuthLayout>
      </div>
    </div>
  )
}
