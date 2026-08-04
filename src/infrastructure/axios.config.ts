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

instance.interceptors.request.use(config => {
  const token = useAuthStore.getState().token
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
