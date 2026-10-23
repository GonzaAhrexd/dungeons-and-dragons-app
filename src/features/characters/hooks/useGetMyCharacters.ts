import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { CharactersService } from '../services/characters.service'
import type { GetMyCharactersResponse } from '../interfaces'

export const useGetMyCharacters = () => {
  return useQuery<GetMyCharactersResponse[], AxiosError>({
    queryKey: ['myCharacters'],
    queryFn: () => CharactersService.getMyCharacters(),
  })
}
