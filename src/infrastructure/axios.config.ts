import type { CreateAxiosDefaults } from 'axios'
import { API_URL } from '@/shared/configs/envs'
import { useAuthStore } from '@/features/auth/store/auth.store'
import axios from 'axios'

const baseConfig: CreateAxiosDefaults = {
  baseURL: `${API_URL}`,
  withCredentials: true,
  timeout: 10000,
}

export const instance = axios.create(baseConfig)
const refreshClient = axios.create(baseConfig) 

instance.interceptors.request.use(config => {
  const token = useAuthStore.getState().accessToken
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

let refreshPromise: Promise<string | null> | null = null

const refreshTokens = async (): Promise<string | null> => {
  const refresh_token = useAuthStore.getState().refreshToken
  if (!refresh_token) return null

  try {
    const { data } = await refreshClient.post('auth/refresh', { refresh_token })
    useAuthStore.getState().setTokens(data.access_token, data.refresh_token)
    return data.access_token
  } catch {
    useAuthStore.getState().logout()
    return null
  }
}

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      refreshPromise ??= refreshTokens().finally(() => {
        refreshPromise = null
      })
      const newAccessToken = await refreshPromise
      if (newAccessToken) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        return instance(originalRequest)
      }
    }
    return Promise.reject(error)
  },
)
