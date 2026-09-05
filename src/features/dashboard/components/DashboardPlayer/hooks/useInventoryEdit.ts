import { useState } from 'react'
import type { InventoryItem } from '../interfaces'

interface UseInventoryEditOptions {
  initialItem?: Partial<InventoryItem>
  onSave: (updated: {
    title: string
    description: string
    quantity?: number
  }) => void
  onDelete: () => void
  onCancel?: () => void
}

export const useInventoryEdit = ({
  initialItem,
  onSave,
  onDelete,
  onCancel,
}: UseInventoryEditOptions) => {
  const [title, setTitle] = useState(initialItem?.title || '')
  const [description, setDescription] = useState(initialItem?.description || '')
  const [quantity, setQuantity] = useState<number>(
    initialItem?.quantity !== undefined ? initialItem.quantity : 1,
  )
  const [confirmingDelete, setConfirmingDelete] = useState(false)

  const handleSave = () => {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      onDelete()
      return
    }

    onSave({
      title: trimmedTitle,
      description: description.trim(),
      quantity: Math.max(1, quantity || 1),
    })
  }

  const handleDeleteClick = () => {
    if (confirmingDelete) {
      onDelete()
    } else {
      setConfirmingDelete(true)
    }
  }

  const handleCancel = () => {
    if (onCancel) {
      onCancel()
    } else {
      onDelete()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (title.trim()) {
        handleSave()
      }
    } else if (e.key === 'Escape') {
      e.preventDefault()
      handleCancel()
    }
  }

  const isNew = !initialItem?.title?.trim()

  return {
    title,
    setTitle,
    description,
    setDescription,
    quantity,
    setQuantity,
    confirmingDelete,
    handleDeleteClick,
    handleSave,
    handleCancel,
    handleKeyDown,
    isNew,
  }
}
