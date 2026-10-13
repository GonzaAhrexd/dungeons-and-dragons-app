import { instance } from '@/infrastructure/axios.config'

import type {
  CreateCharacterRequest,
  CreateCharacterResponse,
} from '../interfaces'

const CONTROLLER = 'character'

export class CharactersService {
  static createCharacter = async (
    data: CreateCharacterRequest,
  ): Promise<CreateCharacterResponse> => {
    const response = await instance.post<CreateCharacterResponse>(
      `/${CONTROLLER}`,
      data,
    )
    return response.data
  }
}
