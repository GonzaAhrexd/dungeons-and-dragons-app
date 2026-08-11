import type { UserProfile } from '@/features/auth/interfaces'

export interface UpdateProfileRequest {
  username?: string
  avatar?: string
  currentPassword?: string
  newPassword?: string
}

export interface UpdateProfileResponse {
  message: string
  user: UserProfile
}
