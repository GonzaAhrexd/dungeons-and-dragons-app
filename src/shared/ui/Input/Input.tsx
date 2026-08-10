import {
  useState,
  useRef,
  useEffect,
  type ChangeEvent,
  type InputHTMLAttributes,
} from 'react'
import { Icon } from '../Icon/Icon'
import './Input.css'

export interface InputProps {
  name: string
  label?: string
  placeholder?: string
  type?: 'text' | 'password' | 'email'
  defaultValue?: string
  variant?: 'gold' | 'paper'
  handlingClass?: string
  htmlAttrs?: InputHTMLAttributes<HTMLInputElement>
}


export const Input = ({
  name,
  label,
  placeholder,
  type = 'text',
  defaultValue = '',
  variant = 'gold',
  handlingClass = '',
  htmlAttrs,
}: InputProps) => {
  if (type === 'password') {
    return (
      <PasswordInput
        name={name}
        label={label}
        placeholder={placeholder}
        defaultValue={defaultValue}
        variant={variant}
        handlingClass={handlingClass}
        htmlAttrs={htmlAttrs}
      />
    )
  }

  return (
    <div className={`cmp-input ${variant} ${handlingClass}`}>
      {label && <p>{label}</p>}
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        defaultValue={defaultValue}
        {...htmlAttrs}
      />
    </div>
  )
}


interface PasswordInputProps {
  name: string
  label?: string
  placeholder?: string
  defaultValue?: string
  variant?: 'gold' | 'paper'
  handlingClass?: string
  htmlAttrs?: InputHTMLAttributes<HTMLInputElement>
}

const MASK_TIMEOUT_MS = 500

const PasswordInput = ({
  name,
  label,
  placeholder,
  defaultValue = '',
  variant = 'gold',
  handlingClass = '',
  htmlAttrs,
}: PasswordInputProps) => {
  const externalValue = (htmlAttrs?.value as string) ?? defaultValue
  const [rawPassword, setRawPassword] = useState<string>(externalValue)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [transientIndex, setTransientIndex] = useState<number | null>(null)

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Sincronizar valor externo cuando cambia en componentes controlados
  useEffect(() => {
    if (htmlAttrs?.value !== undefined) {
      setRawPassword(htmlAttrs.value as string)
    }
  }, [htmlAttrs?.value])

  // Limpiar temporizador al desmontar
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const selectionStart = e.target.selectionStart

    let updatedRaw = ''
    let activeTransientIdx: number | null = null

    if (showPassword) {
      updatedRaw = inputValue
      activeTransientIdx = null
    } else {
      const diffLen = inputValue.length - rawPassword.length

      if (diffLen === 1 && selectionStart !== null) {
        // Carácter individual ingresado en tiempo real
        const insertedChar = inputValue[selectionStart - 1]
        const idx = selectionStart - 1
        updatedRaw = rawPassword.slice(0, idx) + insertedChar + rawPassword.slice(idx)
        activeTransientIdx = idx
      } else if (diffLen < 0 && selectionStart !== null) {
        // Borrado de caracteres (Backspace / Delete)
        const deletedCount = -diffLen
        updatedRaw =
          rawPassword.slice(0, selectionStart) +
          rawPassword.slice(selectionStart + deletedCount)
        activeTransientIdx = null
      } else if (diffLen > 1 && selectionStart !== null) {
        // Pegado de texto
        const pasted = inputValue.slice(selectionStart - diffLen, selectionStart)
        const idx = selectionStart - diffLen
        updatedRaw = rawPassword.slice(0, idx) + pasted + rawPassword.slice(idx)
        activeTransientIdx = null
      } else {
        updatedRaw = inputValue
        activeTransientIdx = null
      }
    }

    setRawPassword(updatedRaw)

    // Programar temporizador de 500 ms para enmascarar el carácter visible
    if (timerRef.current) clearTimeout(timerRef.current)
    if (activeTransientIdx !== null) {
      setTransientIndex(activeTransientIdx)
      timerRef.current = setTimeout(() => {
        setTransientIndex(null)
      }, MASK_TIMEOUT_MS)
    } else {
      setTransientIndex(null)
    }

    // Transmitir valor real no enmascarado al onChange del padre
    if (htmlAttrs?.onChange) {
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          name,
          value: updatedRaw,
        },
      } as ChangeEvent<HTMLInputElement>
      htmlAttrs.onChange(syntheticEvent)
    }
  }

  // Generar cadena visible enmascarando todo excepto el carácter transitorio
  const getDisplayValue = (): string => {
    if (showPassword) return rawPassword

    return rawPassword
      .split('')
      .map((char, index) => (index === transientIndex ? char : '•'))
      .join('')
  }

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev)
    setTransientIndex(null)
    if (timerRef.current) clearTimeout(timerRef.current)
  }

  const { value, onChange, ...restHtmlAttrs } = htmlAttrs || {}

  return (
    <div className={`cmp-input ${variant} ${handlingClass}`}>
      {label && <p>{label}</p>}
      <div className="input-wrapper">
        <input
          name={name}
          placeholder={placeholder}
          type="text"
          value={getDisplayValue()}
          onChange={handleChange}
          {...restHtmlAttrs}
        />
        <button
          type="button"
          className="toggle-password-btn"
          onClick={toggleShowPassword}
          title={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          tabIndex={-1}
        >
          <Icon icon={showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} />
        </button>
      </div>
    </div>
  )
}
