import { AuthService } from '@/features/auth/services/auth.service'
import { useMutation } from '@tanstack/react-query'

import type { RegisterRequest, RegisterResponse } from '../interfaces'
import { useAuthStore } from '../store/auth.store'

export const useRegister = () => {
  const setToken = useAuthStore(state => state.setToken)
  const setUser = useAuthStore(state => state.setUser)
  const mutation = useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: AuthService.registerUser,
    onSuccess: data => {
      console.log('Registration successful:', data)
      const { access_token, username, id } = data

      setToken(access_token)
      setUser({ id, username })
    },
    onError: error => {
      console.error('Registration failed:', error.message)
    },
  })
  return mutation
}
