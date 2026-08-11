import { useMutation } from '@tanstack/react-query'
import { ProfileService } from '../services/profile.service'
import type { UpdateProfileRequest, UpdateProfileResponse } from '../interfaces'
import { useAuthStore } from '@/features/auth/store/auth.store'

export const useUpdateProfile = () => {
  const setUser = useAuthStore(state => state.setUser)
  const currentUser = useAuthStore(state => state.user)

  return useMutation<UpdateProfileResponse, Error, UpdateProfileRequest>({
    mutationFn: ProfileService.updateProfile,
    onSuccess: (data, variables) => {
      console.log('Profile update response:', data)
      const updatedUsername =
        variables.username || currentUser?.username || 'Generic_User'
      const updatedAvatar = variables.avatar ?? currentUser?.avatar

      setUser({
        id: currentUser?.id || '1',
        username: updatedUsername,
        avatar: updatedAvatar,
      })
    },
    onError: error => {
      console.error('Failed to update profile:', error.message)
    },
  })
}
