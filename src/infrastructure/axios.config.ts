import type { CreateAxiosDefaults } from 'axios'
import { API_URL } from '@/shared/configs/envs'
import axios from 'axios'

const baseConfig: CreateAxiosDefaults = {
  baseURL: `${API_URL}`,
  withCredentials: true,
  timeout: 10000,
}

export const instance = axios.create(baseConfig)
