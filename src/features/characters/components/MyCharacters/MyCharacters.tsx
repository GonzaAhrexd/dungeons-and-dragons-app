import { useState } from 'react'
import './MyCharacters.css'
import {
  CreateCharacter,
  Character,
  type CharacterData,
  CreateCharacterForm,
} from './components'
import { useGetMyCharacters } from '../../hooks/useGetMyCharacters'
export const MyCharacters = () => {
  const [createCharacterMode, setCreateCharacterMode] = useState(false)

  const { data: myCharacters, isLoading } = useGetMyCharacters()

  const character: CharacterData = {
    name: 'Bertok',
    race: 'Humano',
    class: 'Bardo',
    subclass: 'Persuasión',
    stats: [
      { id: '1', name: 'Strength', abbreviation: 'STR', value: 16 },
      { id: '2', name: 'Dexterity', abbreviation: 'DEX', value: 14 },
      { id: '3', name: 'Constitution', abbreviation: 'CON', value: 15 },
      { id: '4', name: 'Intelligence', abbreviation: 'INT', value: 13 },
      { id: '5', name: 'Charity', abbreviation: 'CHA', value: 17 },
      { id: '6', name: 'Wisdom', abbreviation: 'WIS', value: 12 },
    ],
    campaign: 'La plaga carmesí',
    health: {
      current: 98,
      max: 98,
    },
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="cmp-my-characters">
      <h1>My Characters</h1>
      {!createCharacterMode ? (
        <div className="characters-list">
          <CreateCharacter setCreateCharacterMode={setCreateCharacterMode} />
          {myCharacters?.map(character => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <CreateCharacterForm onCancel={() => setCreateCharacterMode(false)} />
      )}
    </div>
  )
}
