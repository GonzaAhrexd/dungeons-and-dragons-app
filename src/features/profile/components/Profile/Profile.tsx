import './Profile.css'
import { useState } from 'react'
import type { SubmitEventHandler } from 'react'
import { profileText } from './Profile.langs'
import { useText } from '@/features/langs/hooks/useText'
import { useAuthStore } from '@/features/auth/store/auth.store'
import { useUpdateProfile } from '../../hooks'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'

export const Profile = () => {
  const text = useText(profileText)
  const user = useAuthStore(state => state.user)

  const [username, setUsername] = useState(user?.username || 'Generic_User')
  const [avatar, setAvatar] = useState(user?.avatar || '')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  const { mutate: updateProfile, isPending } = useUpdateProfile()

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    setStatusMessage(null)

    if (newPassword && newPassword !== confirmPassword) {
      setStatusMessage({
        type: 'error',
        text: text.passwordMismatch(),
      })
      return
    }

    updateProfile(
      {
        username,
        avatar,
        currentPassword,
        newPassword: newPassword || undefined,
      },
      {
        onSuccess: () => {
          setStatusMessage({
            type: 'success',
            text: text.successMsg(),
          })
          setCurrentPassword('')
          setNewPassword('')
          setConfirmPassword('')
        },
        onError: err => {
          setStatusMessage({
            type: 'error',
            text: err.message || 'An error occurred while updating profile.',
          })
        },
      },
    )
  }

  return (
    <div className="cmp-profile">
      <div className="banner">
        <div className="banner-fade" />
      </div>

      <div className="content">
        <div className="card">
          <div className="header">
            <Icon icon="fa-solid fa-user-gear" />
            <h2>{text.accountManagement()}</h2>
          </div>

          <div className="header-divider" />

          {statusMessage && (
            <div className={`alert ${statusMessage.type}`}>
              <Icon
                icon={
                  statusMessage.type === 'success'
                    ? 'fa-solid fa-circle-check'
                    : 'fa-solid fa-triangle-exclamation'
                }
              />
              <span>{statusMessage.text}</span>
            </div>
          )}

          <form className="form" onSubmit={handleSubmit}>
            <Input
              id="username"
              name="username"
              label={text.username()}
              defaultValue={username}
              autoComplete="username"
              theme="gold"
              htmlAttrs={{
                value: username,
                onChange: e => setUsername(e.target.value),
                required: true,
              }}
            />

            <div className="input-with-preview">
              <Input
                id="avatar"
                name="avatar"
                label={text.avatarScroll()}
                type="text"
                autoComplete="off"
                placeholder={text.avatarPlaceholder()}
                theme="gold"
                htmlAttrs={{
                  value: avatar,
                  onChange: e => setAvatar(e.target.value),
                }}
              />
              <img
                src={
                  avatar.trim() !== '' ? avatar : user?.avatar || '/avatar.png'
                }
                alt="Avatar Preview"
                className="avatar-preview-thumbnail"
                onError={e => {
                  e.currentTarget.src = '/avatar.png'
                }}
              />
            </div>

            <Input
              id="current-password"
              name="currentPassword"
              label={text.currentSecretWord()}
              type="password"
              autoComplete="current-password"
              placeholder={text.currentPasswordPlaceholder()}
              theme="gold"
              handlingClass="full-width"
              htmlAttrs={{
                value: currentPassword,
                onChange: e => setCurrentPassword(e.target.value),
              }}
            />

            <Input
              id="new-password"
              name="newPassword"
              label={text.newDecree()}
              type="password"
              autoComplete="new-password"
              placeholder={text.newPasswordPlaceholder()}
              theme="gold"
              htmlAttrs={{
                value: newPassword,
                onChange: e => setNewPassword(e.target.value),
              }}
            />

            <Input
              id="confirm-password"
              name="confirmPassword"
              label={text.confirmSeal()}
              type="password"
              autoComplete="new-password"
              placeholder={text.confirmPasswordPlaceholder()}
              theme="gold"
              htmlAttrs={{
                value: confirmPassword,
                onChange: e => setConfirmPassword(e.target.value),
              }}
            />

            <div className="btn-container">
              <Button
                title={text.updateDecree()}
                theme="primary"
                loader={isPending}
                submit
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
