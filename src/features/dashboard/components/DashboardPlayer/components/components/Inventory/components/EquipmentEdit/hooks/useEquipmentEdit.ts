import { useState } from 'react'
import type { EquipmentItem, EquipmentModifier } from '../../../interfaces'
import { ATTRIBUTES } from '@/features/dashboard/store/player.store'

interface UseEquipmentEditOptions {
  initialItem?: Partial<EquipmentItem>
  onSave: (updated: {
    icon: string
    title: string
    description: string
    modifiers: EquipmentModifier[]
  }) => void
  onDelete: () => void
}

export const useEquipmentEdit = ({
  initialItem,
  onSave,
  onDelete,
}: UseEquipmentEditOptions) => {
  const defaultAttrId = ATTRIBUTES[0].id

  const [icon, setIcon] = useState(
    initialItem?.icon || 'fa-solid fa-shield-halved',
  )
  const [title, setTitle] = useState(initialItem?.title || '')
  const [description, setDescription] = useState(initialItem?.description || '')
  const [modifiers, setModifiers] = useState<EquipmentModifier[]>(
    initialItem?.modifiers && initialItem.modifiers.length > 0
      ? initialItem.modifiers
      : [{ value: 1, attribute: defaultAttrId }],
  )
  const [confirmingDelete, setConfirmingDelete] = useState(false)

  const handleAddModifier = () => {
    setModifiers(prev => [...prev, { value: 1, attribute: defaultAttrId }])
  }

  const handleRemoveModifier = (index: number) => {
    setModifiers(prev => prev.filter((_, i) => i !== index))
  }

  const handleModifierChange = (
    index: number,
    field: 'value' | 'attribute',
    val: string | number,
  ) => {
    setModifiers(prev =>
      prev.map((mod, i) => (i === index ? { ...mod, [field]: val } : mod)),
    )
  }

  const handleSave = () => {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      onDelete()
      return
    }

    let finalDesc = description.trim()
    if (!finalDesc && modifiers.length > 0) {
      finalDesc = modifiers
        .map(m => {
          const found = ATTRIBUTES.find(
            a =>
              a.id.toLowerCase() === m.attribute.toLowerCase() ||
              a.name.toLowerCase() === m.attribute.toLowerCase() ||
              a.abbreviation.toLowerCase() === m.attribute.toLowerCase(),
          )
          const attrLabel = found ? found.name : m.attribute
          return `${m.value >= 0 ? '+' : ''}${m.value} ${attrLabel}`
        })
        .join(', ')
    }

    onSave({
      icon,
      title: trimmedTitle,
      description: finalDesc,
      modifiers,
    })
  }

  const isNew = !initialItem?.title?.trim()

  return {
    icon,
    setIcon,
    title,
    setTitle,
    description,
    setDescription,
    modifiers,
    confirmingDelete,
    setConfirmingDelete,
    handleAddModifier,
    handleRemoveModifier,
    handleModifierChange,
    handleSave,
    isNew,
  }
}
