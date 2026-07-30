import './Login.css'
import { Link } from 'wouter'

import { Input } from '@/shared/ui/Input/Input'
export const Login = () => {
  return (
    <div className="cmp-login">
      <form>
        <h1>Join the guild</h1>
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
