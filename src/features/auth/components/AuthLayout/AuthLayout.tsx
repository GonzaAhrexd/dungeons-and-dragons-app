import './AuthLayout.css'
import type { ReactNode, SubmitEventHandler } from 'react'
import { useText } from '@/features/langs/hooks/useText'
import { authLayoutText } from './AuthLayout.langs'

interface AuthLayoutProps {
  title?: string
  isRegisterMode?: boolean
  children: ReactNode
  handleSubmit?: SubmitEventHandler<HTMLFormElement>
  setIsRegisterMode: (isRegisterMode: boolean) => void
}

export const AuthLayout = ({
  title,
  isRegisterMode,
  children,
  handleSubmit,
  setIsRegisterMode,
}: AuthLayoutProps) => {
  const text = useText(authLayoutText)

  const handleChangeMode = () => {
    setIsRegisterMode(!isRegisterMode)
  }

  return (
    <div className="cmp-auth-layout">
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <div className="divider"></div>
        {children}
        <div className="divider"></div>

        <p>
          {isRegisterMode ? (
            <>
              {text.alreadyHaveAccount()}{' '}
              <a onClick={handleChangeMode}>{text.login()}</a>
            </>
          ) : (
            <>
              {text.dontHaveAccount()}{' '}
              <a onClick={handleChangeMode}>{text.signup()}</a>
            </>
          )}
        </p>
      </form>
    </div>
  )
}
