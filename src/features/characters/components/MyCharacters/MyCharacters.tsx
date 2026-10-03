import './MyCharacters.css'
import { CreateCharacter, Character, type CharacterData } from './components'
export const MyCharacters = () => {
  const character: CharacterData = {
    name: 'Bertok',
    race: 'Humano',
    class: 'Bardo',
    subclass: 'Persuasión',
    stats: [
      { id: '1', name: 'Strength', abbreviation: 'STR', value: 16 },
      { id: '2', name: 'Dexterity', abbreviation: 'DEX', value: 14 },
      { id: '3', name: 'Constitution', abbreviation: 'CON', value: 15 },
    ],
    campaign: 'La plaga carmesí',
    health: {
      current: 98,
      max: 98,
    },
  }

  return (
    <div className="cmp-my-characters">
      <h1>My Characters</h1>
      <div className="characters-list">
        <CreateCharacter />
        <Character character={character} />
      </div>
    </div>
  )
}
