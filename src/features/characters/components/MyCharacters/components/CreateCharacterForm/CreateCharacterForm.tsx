import './CreateCharacterForm.css'
import { useText } from '@/features/langs/hooks/useText'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { InputSelect, TextArea } from '@/shared/ui/'
import { createCharacterFormText } from './CreateCharacterForm.langs'
import { useRaceOptions, useClassOptions } from '@/features/characters/const'
import { useCreateCharacter } from '@/features/characters/hooks/useCreateCharacter'

interface CreateCharacterFormProps {
  onCancel?: () => void
}

export const CreateCharacterForm = ({ onCancel }: CreateCharacterFormProps) => {
  const text = useText(createCharacterFormText)

  const raceOptions = useRaceOptions()
  const classOptions = useClassOptions()

  const attributes = [
    ['strength', text.strength()],
    ['dexterity', text.dexterity()],
    ['constitution', text.constitution()],
    ['intelligence', text.intelligence()],
    ['wisdom', text.wisdom()],
    ['charisma', text.charisma()],
  ]

  const { mutateAsync: createCharacter } = useCreateCharacter()

  const handleCreateCharacter = async (formData: FormData) => {
    const formValues = Object.fromEntries(formData) as Record<
      string,
      FormDataEntryValue
    >
    const toNumber = (value: FormDataEntryValue | undefined) =>
      value === undefined || value === '' ? undefined : Number(value)

    const data = {
      name: String(formValues.name),
      race: String(formValues.race),
      class: String(formValues.class),
      subclass: formValues.subclass ? String(formValues.subclass) : undefined,
      alignment: formValues.alignment
        ? String(formValues.alignment)
        : undefined,
      backstory: String(formValues.backstory),
      objective: String(formValues.objective),
      level: toNumber(formValues.level),
      strength: toNumber(formValues.strength),
      dexterity: toNumber(formValues.dexterity),
      constitution: toNumber(formValues.constitution),
      intelligence: toNumber(formValues.intelligence),
      wisdom: toNumber(formValues.wisdom),
      charisma: toNumber(formValues.charisma),
    }

    await createCharacter(data)
  }

  return (
    <div className="cmp-create-character-form">
      <div className="header-group">
        <span className="form-emblem" aria-hidden="true">
          ✦
        </span>
        <div className="header-text">
          <h2>{text.title()}</h2>
          <p>{text.description()}</p>
        </div>
      </div>

      <form action={handleCreateCharacter}>
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
            <Input
              id="character-alignment"
              name="alignment"
              label={text.alignement()}
              autoComplete="off"
            />
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
            <Input
              id="character-level"
              name="level"
              label={text.level()}
              type="text"
              htmlAttrs={{ type: 'number' }}
            />
          </div>
          <TextArea
            id="backstory"
            name="backstory"
            label={text.backstory()}
            htmlAttrs={{ required: true }}
          />
          <TextArea
            id="objective"
            name="objective"
            label={text.objective()}
            htmlAttrs={{ required: true }}
          />
        </section>

        <section className="form-section">
          <div className="section-heading">
            <h3>{text.attributes()}</h3>
          </div>
          <div className="attributes-grid">
            {attributes.map(([name, label]) => (
              <Input
                key={name}
                id={`character-${name}`}
                name={name}
                label={label}
                type="text"
                htmlAttrs={{ type: 'number', required: true }}
              />
            ))}
          </div>
        </section>

        <div className="form-actions">
          <Button
            title={text.cancel()}
            theme="secondary"
            handlingClass="btn-cancel"
            onClick={onCancel}
          />
          <Button title={text.submit()} handlingClass="btn-submit" submit />
        </div>
      </form>
    </div>
  )
}
