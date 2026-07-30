import type { ReactNode, SubmitEventHandler } from 'react'
import './AuthLayout.css'
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
              Already have an account? <a onClick={handleChangeMode}>Log in</a>
            </>
          ) : (
            <>
              Don't have an account? <a onClick={handleChangeMode}>Sign up</a>
            </>
          )}
        </p>
      </form>
    </div>
  )
}
