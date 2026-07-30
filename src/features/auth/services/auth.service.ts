import { instance } from '@/infrastructure/axios.config'

import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../interfaces'

const CONTROLLER = 'auth'

export class AuthService {
  static loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
    try {
      const response = await instance.post(`${CONTROLLER}/login`, data)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  static registerUser = async (
    data: RegisterRequest,
  ): Promise<RegisterResponse> => {
    try {
      const response = await instance.post(`${CONTROLLER}/register`, data)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
