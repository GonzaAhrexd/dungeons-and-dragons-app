import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { useState } from 'react'

export const Register = () => {
  const [form, setForm] = useState({ username: '', pass1: '', pass2: '' })

  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  const passwordsMismatch = form.pass1 !== form.pass2
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
        htmlAttrs={{ minLength: 8, onChange: handleChange('pass1') }}
      />
      <Input
        label="Repeat your Password"
        name="password2"
        type="password"
        htmlAttrs={{ minLength: 8, onChange: handleChange('pass2') }}
      />

      <Button
        title="Sign up"
        htmlAttrs={{
          disabled: passwordsMismatch || !allValuesFilled,
          type: 'submit',
        }}
      />
    </>
  )
}
