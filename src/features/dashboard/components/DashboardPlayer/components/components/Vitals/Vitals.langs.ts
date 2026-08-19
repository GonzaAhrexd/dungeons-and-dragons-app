import type { LanguagesText } from '@/features/langs/interfaces'

interface VitalsTexts {
  vitals: string
  edit: string
  back: string
  newBar: string
  delete: string
  save: string
  cancel: string
  placeholder: string
}

export const vitalsText: LanguagesText<VitalsTexts> = {
  en: {
    vitals: 'Vitals',
    edit: 'Edit',
    back: 'Back',
    newBar: 'New Bar',
    delete: 'Delete',
    save: 'Save',
    cancel: 'Cancel',
    placeholder: 'Name',
  },
  es: {
    vitals: 'Vitalidad',
    edit: 'Editar',
    back: 'Volver',
    newBar: 'Nueva Barra',
    delete: 'Eliminar',
    save: 'Guardar',
    cancel: 'Cancelar',
    placeholder: 'Nombre',
  },
}
