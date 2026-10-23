import { instance } from '@/infrastructure/axios.config'

import type {
  CreateCharacterRequest,
  CreateCharacterResponse,
  GetMyCharactersResponse,
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

  static getMyCharacters = async (): Promise<GetMyCharactersResponse[]> => {
    const response = await instance.get<GetMyCharactersResponse[]>(
      `/${CONTROLLER}/me`,
    )
    return response.data
  }
}
