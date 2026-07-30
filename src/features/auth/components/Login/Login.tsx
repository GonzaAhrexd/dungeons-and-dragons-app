import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
export const Login = () => {
  return (
    <>
      <Input label="Username" name="username" />
      <Input label="Password" name="password" type="password" />
      <Button title="Login" />
    </>
  )
}
