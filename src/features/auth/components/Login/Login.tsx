import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { useState } from 'react'
import { useText } from '@/features/langs/hooks/useText'
import { loginText } from './Login.langs'

export const Login = () => {
  const text = useText(loginText)

  const [form, setForm] = useState({ username: '', password: '' })
  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  const allValuesFilled = Object.values(form).every(v => v.length > 0)

  return (
    <>
      <Input
        label={text.username()}
        name="username"
        variant="paper"
        placeholder={text.ph_username()}
        htmlAttrs={{ onChange: handleChange('username') }}
      />
      <Input
        label={text.password()}
        name="password"
        type="password"
        variant="paper"
        placeholder={text.ph_password()}
        htmlAttrs={{ minLength: 8, onChange: handleChange('password') }}
      />
      <Button
        title={text.login()}
        loader
        htmlAttrs={{ disabled: !allValuesFilled, type: 'submit' }}
      />
    </>
  )
}
