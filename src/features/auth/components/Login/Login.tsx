import { Input } from '@/shared/ui/Input/Input'

export const Login = () => {
  return (
    <>
      <Input label="Username" name="username" />
      <Input label="Password" name="password" type="password" />
      <button type="submit">Login</button>
    </>
  )
}
