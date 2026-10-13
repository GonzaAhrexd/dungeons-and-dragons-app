import { CharactersService } from '../services/characters.service'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import type {
  CreateCharacterRequest,
  CreateCharacterResponse,
} from '../interfaces'

export const useCreateCharacter = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation<
    CreateCharacterResponse,
    Error,
    CreateCharacterRequest
  >({
    mutationFn: CharactersService.createCharacter,
    onSuccess: data => {
      console.log('Character created successfully:', data)
      queryClient.invalidateQueries({ queryKey: ['myCharacters'] })
    },
    onError: error => {
      console.error('Failed to create character:', error.message)
    },
  })

  return mutation
}
