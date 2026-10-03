import type { Attribute } from '@/features/dashboard/components/DashboardPlayer/interfaces/stats.interface'
import { useText } from '@/features/langs/hooks/useText'
import { Badge } from '@/shared/ui/Badge/Badge'
import { characterText } from './Character.langs'
import './Character.css'

export interface CharacterData {
  name: string
  race: string
  class: string
  subclass?: string | null
  stats: Attribute[]
  campaign?: string | null
  health?: {
    current: number
    max: number
  }
}

interface CharacterProps {
  character: CharacterData
}

export const Character = ({ character }: CharacterProps) => {
  const text = useText(characterText)
  const campaignName = character.campaign?.trim() || text.unassigned()
  const healthPercentage = character.health
    ? Math.min(
        100,
        Math.max(
          0,
          character.health.max > 0
            ? (character.health.current / character.health.max) * 100
            : 0,
        ),
      )
    : 0

  return (
    <div className="cmp-character">
      <div className="character-header">
        <div className="character-icon">
          <span>{character.name.charAt(0).toUpperCase()}</span>
        </div>

        <div className="character-heading">
          <h2>{character.name}</h2>
          <p>{campaignName}</p>
        </div>
      </div>

      <div className="character-details">
        <Badge text={`${character.race}`} />
        <Badge text={`${character.class}`} />
        <Badge text={`${character.subclass?.trim() || text.unassigned()}`} />
      </div>

      {character.health && (
        <div className="health-bar">
          <div className="health-bar-header">
            <span>{text.health()}</span>
            <span>
              {character.health.current} / {character.health.max}
            </span>
          </div>
          <div
            className="health-bar-track"
            role="progressbar"
            aria-label={text.health()}
            aria-valuemin={0}
            aria-valuemax={character.health.max}
            aria-valuenow={character.health.current}
          >
            <div
              className="health-bar-fill"
              style={{ width: `${healthPercentage}%` }}
            />
          </div>
        </div>
      )}

      <div className="attributes">
        <h3>{text.attributes()}</h3>
        <div className="attributes-list">
          {character.stats.map(attribute => (
            <div className="attribute" key={attribute.id}>
              <span>{attribute.abbreviation}</span>
              <strong>{attribute.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Character
