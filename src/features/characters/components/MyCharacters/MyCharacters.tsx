import './MyCharacters.css'
import { CreateCharacter } from './components/CreateCharacter/CreateCharacter'
export const MyCharacters = () => {
  return (
    <div className="cmp-my-characters">
      <h1>My Characters</h1>
      <CreateCharacter />
    </div>
  )
}
