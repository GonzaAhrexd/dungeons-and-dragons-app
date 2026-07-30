import './Home.css'
import { useState, type SubmitEventHandler } from 'react'
import { Login } from '../Login/Login'
import { AuthLayout } from '../AuthLayout/AuthLayout'
import { parseFormData } from '@/shared/utils'
import { useLogin } from '../../hooks'

export const Home = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false)
  const { mutateAsync: loginUser } = useLogin()

  const title = isRegisterMode ? 'Register' : 'Log in'

  const handleLogin: SubmitEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = parseFormData(formData, {
      username: 'string',
      password: 'string',
    })

    loginUser(data)
  }

  return (
    <div className="cmp-home">
      <div className="content">
        <div className="info-section">
          <h1>Dungeons and Dragons App</h1>
          <p>
            The ultimate tool for managing your Dungeons and Dragons campaigns
            where you can create and manage your characters, track your
            adventures, and connect with other players. Join us and embark on an
            epic journey!
          </p>
        </div>
        <AuthLayout
          {...{ title, isRegisterMode, setIsRegisterMode }}
          handleSubmit={!isRegisterMode ? handleLogin : undefined}
        >
          {!isRegisterMode && <Login />}
        </AuthLayout>
      </div>
    </div>
  )
}
