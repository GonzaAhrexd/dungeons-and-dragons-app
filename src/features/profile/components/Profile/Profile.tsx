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
      <div className="profile-banner">
        <div className="banner-fade" />
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <Icon icon="fa-solid fa-user-gear" />
            <h2>{text.accountManagement()}</h2>
          </div>

          <div className="header-divider" />

          {statusMessage && (
            <div className={`profile-alert ${statusMessage.type}`}>
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

          <form className="profile-form" onSubmit={handleSubmit}>
            <Input
              name="username"
              label={text.username()}
              defaultValue={username}
              theme="gold"
              htmlAttrs={{
                value: username,
                onChange: e => setUsername(e.target.value),
                required: true,
              }}
            />

            <div className="cmp-input gold">
              <p>{text.avatarScroll()}</p>
              <div className="input-with-preview">
                <img
                  src={
                    avatar.trim() !== ''
                      ? avatar
                      : user?.avatar ||
                        `https://api.dicebear.com/7.x/adventurer/svg?seed=${username || 'Generic_User'}`
                  }
                  alt="Avatar Preview"
                  className="avatar-preview-thumbnail"
                  onError={e => {
                    e.currentTarget.src = `https://api.dicebear.com/7.x/adventurer/svg?seed=${username || 'Generic_User'}`
                  }}
                />
                <input
                  name="avatar"
                  placeholder={text.avatarPlaceholder()}
                  type="text"
                  value={avatar}
                  onChange={e => setAvatar(e.target.value)}
                />
              </div>
            </div>

            <Input
              name="currentPassword"
              label={text.currentSecretWord()}
              type="password"
              placeholder={text.currentPasswordPlaceholder()}
              theme="gold"
              handlingClass="full-width"
              htmlAttrs={{
                value: currentPassword,
                onChange: e => setCurrentPassword(e.target.value),
              }}
            />

            <Input
              name="newPassword"
              label={text.newDecree()}
              type="password"
              placeholder={text.newPasswordPlaceholder()}
              theme="gold"
              htmlAttrs={{
                value: newPassword,
                onChange: e => setNewPassword(e.target.value),
              }}
            />

            <Input
              name="confirmPassword"
              label={text.confirmSeal()}
              type="password"
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
                theme="gold"
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
