import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { useState } from 'react'

export const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' })
  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  const allValuesFilled = Object.values(form).every(v => v.length > 0)

  return (
    <>
      <Input
        label="Username"
        name="username"
        htmlAttrs={{ onChange: handleChange('username') }}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        htmlAttrs={{ minLength: 8, onChange: handleChange('password') }}
      />
      <Button
        title="Login"
        loader
        htmlAttrs={{ disabled: !allValuesFilled, type: 'submit' }}
      />
    </>
  )
}
