import './Login.css'
import { Link } from 'wouter'

import { Input } from '@/shared/ui/Input/Input'
import { useLogin } from '../../hooks/useLogin'
import { parseFormData } from '@/shared/utils'
import type { SubmitEventHandler } from 'react'
import { useAuthStore } from '../../store/auth.store'

export const Login = () => {
  const { mutateAsync: loginUser } = useLogin()
  const user = useAuthStore(state => state.user)

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = parseFormData(formData, {
      username: 'string',
      password: 'string',
    })

    loginUser(data)
  }

  return (
    <div className="cmp-login">
      <form onSubmit={handleSubmit}>
        {user && user.username}
        <h1>Log in</h1>
        <div className="divider"></div>
        <Input label="Username" name="username" />
        <Input label="Password" name="password" type="password" />
        <button type="submit">Login</button>
        <div className="divider"></div>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}
