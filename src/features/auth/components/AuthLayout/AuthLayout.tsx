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
          <span
            style={{
              width: '25px',
              height: '1px',
              position: 'relative',
              overflow: 'visible',
              flexShrink: 0,
            }}
          >
            <svg
              viewBox="0 0 100 100"
              width="32"
              height="32"
              fill="currentColor"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <g transform="rotate(45, 50, 50)">
                <polygon points="50,3 45,58 55,58" />
                <rect x="46" y="58" width="8" height="12" rx="1" />
                <rect x="36" y="70" width="28" height="7" rx="3" />
                <rect x="47" y="77" width="6" height="15" rx="2" />
                <ellipse cx="50" cy="96" rx="7" ry="5" />
              </g>
              <g transform="rotate(-45, 50, 50)">
                <polygon points="50,3 45,58 55,58" />
                <rect x="46" y="58" width="8" height="12" rx="1" />
                <rect x="36" y="70" width="28" height="7" rx="3" />
                <rect x="47" y="77" width="6" height="15" rx="2" />
                <ellipse cx="50" cy="96" rx="7" ry="5" />
              </g>
            </svg>
          </span>
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
