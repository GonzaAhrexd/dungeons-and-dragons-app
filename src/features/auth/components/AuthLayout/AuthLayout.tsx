import './AuthLayout.css'
import type { ReactNode, SubmitEventHandler } from 'react'
import { useText } from '@/features/langs/hooks/useText'
import { authLayoutText } from './AuthLayout.langs'
import { useLanguageStore } from '@/features/langs/store/langs.store'
import { Icon } from '@/shared/ui/Icon/Icon'

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
  const language = useLanguageStore(state => state.language)
  const setLanguage = useLanguageStore(state => state.setLanguage)

  const handleChangeMode = () => {
    setIsRegisterMode(!isRegisterMode)
  }

  return (
    <div className="cmp-auth-layout">
      <form onSubmit={handleSubmit}>
        <div className="corner-tr"></div>
        <div className="corner-bl"></div>
        <h1>{title}</h1>
        <div className="title-decoration">
          <Icon icon="fa-solid fa-khanda" />
        </div>
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

        <div className="language-selector">
          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN {language === 'en' && <Icon icon="fa-solid fa-check" />} 
          </button>
          <button
            type="button"
            className={language === 'es' ? 'active' : ''}
            onClick={() => setLanguage('es')}
          >
            ES {language === 'es' && <Icon icon="fa-solid fa-check" />} 
          </button>
        </div>
      </form>
    </div>
  )
}