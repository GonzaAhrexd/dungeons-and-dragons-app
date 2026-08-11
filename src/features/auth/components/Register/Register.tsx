import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { useState } from 'react'
import { useText } from '@/features/langs/hooks/useText'
import { registerText } from './Register.langs'
export const Register = () => {
  const text = useText(registerText)

  const [form, setForm] = useState({ username: '', pass1: '', pass2: '' })

  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  const passwordsMismatch = form.pass1 !== form.pass2
  const allValuesFilled = Object.values(form).every(v => v.length > 0)

  return (
    <>
      <Input
        label={text.username()}
        name="username"
        theme="paper"
        placeholder={text.ph_username()}
        htmlAttrs={{ onChange: handleChange('username') }}
      />
      <Input
        label={text.password()}
        name="password"
        type="password"
        theme="paper"
        placeholder={text.ph_password()}
        htmlAttrs={{ minLength: 8, onChange: handleChange('pass1') }}
      />
      <Input
        label={text.repeatPassword()}
        name="password2"
        type="password"
        theme="paper"
        placeholder={text.ph_repeat_password()}
        htmlAttrs={{ minLength: 8, onChange: handleChange('pass2') }}
      />

      <Button
        title={text.signup()}
        loader
        submit
        theme="primary"
        handlingClass="red-button"
        htmlAttrs={{
          disabled: passwordsMismatch || !allValuesFilled,
        }}
      />
    </>
  )
}
