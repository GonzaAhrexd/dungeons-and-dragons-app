import './CreateCharacterForm.css'
import { useText } from '@/features/langs/hooks/useText'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { InputSelect } from '@/shared/ui/'
import { createCharacterFormText } from './CreateCharacterForm.langs'
import { useRaceOptions, useClassOptions } from '@/features/characters/const'

interface CreateCharacterFormProps {
  onCancel?: () => void
  onSubmit?: (formData: FormData) => void | Promise<void>
}

export const CreateCharacterForm = ({
  onCancel,
  onSubmit,
}: CreateCharacterFormProps) => {
  const text = useText(createCharacterFormText)

  const raceOptions = useRaceOptions()
  const classOptions = useClassOptions()

  return (
    <div className="cmp-create-character-form">
      <div className="header-group">
        <span className="form-emblem" aria-hidden="true">
          ✦
        </span>
        <div>
          <h2>{text.title()}</h2>
          <p>{text.description()}</p>
        </div>
      </div>

      <form action={onSubmit}>
        <section className="form-section">
          <h3>{text.identity()}</h3>
          <div className="form-grid">
            <Input
              id="character-name"
              name="name"
              label={text.name() + '*'}
              autoComplete="off"
              htmlAttrs={{ required: true }}
            />
            <div className="select-field">
              <label htmlFor="character-race">{text.race()}*</label>
              <InputSelect
                id="character-race"
                name="race"
                options={raceOptions}
                placeholder={text.selectPlaceholder()}
                sortAlphabetically
                required
              />
            </div>
            <div className="select-field">
              <label htmlFor="character-class">{text.class()}*</label>
              <InputSelect
                id="character-class"
                name="class"
                options={classOptions}
                placeholder={text.selectPlaceholder()}
                sortAlphabetically
                required
              />
            </div>
            <Input
              id="character-subclass"
              name="subclass"
              label={text.subclass()}
            />
          </div>
        </section>

        <section className="form-section">
          <div className="section-heading">
            <h3>{text.attributes()}</h3>
          </div>
          <div className="attributes-grid">
            {[
              ['strength', text.strength()],
              ['dexterity', text.dexterity()],
              ['constitution', text.constitution()],
              ['intelligence', text.intelligence()],
              ['wisdom', text.wisdom()],
              ['charisma', text.charisma()],
            ].map(([name, label]) => (
              <Input
                key={name}
                id={`character-${name}`}
                name={name}
                label={label}
                type="text"
                htmlAttrs={{ type: 'number', min: 1, max: 30, required: true }}
              />
            ))}
          </div>
        </section>

        <div className="form-actions">
          {onCancel && (
            <Button
              title={text.cancel()}
              theme="secondary"
              handlingClass="btn-cancel"
              onClick={onCancel}
            />
          )}
          <Button title={text.submit()} handlingClass="btn-submit" submit />
        </div>
      </form>
    </div>
  )
}
