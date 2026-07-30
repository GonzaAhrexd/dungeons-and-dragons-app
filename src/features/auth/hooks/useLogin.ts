import { AuthService } from '../services/auth.service'

import type { LoginRequest, LoginResponse } from '../interfaces'

import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '../store/auth.store'

export const useLogin = () => {
  const setToken = useAuthStore(state => state.setToken)
  const setUser = useAuthStore(state => state.setUser)

  const mutation = useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: AuthService.loginUser,
    onSuccess: data => {
      console.log('Login successful:', data)
      const { access_token: token, username, id } = data

      setToken(token)
      setUser({ id, username })
    },
    onError: error => {
      console.error('Login failed:', error.message)
    },
  })
  return mutation
}
