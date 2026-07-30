import { useAuthStore } from '@/features/auth/store/auth.store'
import { type ReactNode } from 'react'
import { Redirect } from 'wouter'

interface IsAuthenticatedProps {
  children: ReactNode
}

export const IsAuthenticated = ({ children }: IsAuthenticatedProps) => {
  const user = useAuthStore(state => state.user)

  const isLogged = user !== null
  if (!isLogged) {
    return <Redirect to={'/'} />
  }

  return children
}
