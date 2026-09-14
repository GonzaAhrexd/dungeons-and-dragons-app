/**
 * Formatea una fecha o string ISO a un texto legible en español para mostrar la próxima sesión.
 *
 * @example
 * formatNextSessionDate('2026-09-18T20:00:00') // -> 'Vie 18 Sep 20:00h'
 *
 * @param dateInput - Fecha en formato string (ISO), objeto Date, null o undefined.
 * @returns Texto formateado con el día de la semana, día del mes, mes abreviado y hora ('Vie 18 Sep 20:00h') o null si la fecha es nula/inválida.
 */
export const formatNextSessionDate = (
  dateInput: string | Date | null | undefined
): string | null => {
  if (!dateInput) return null

  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput
  if (isNaN(date.getTime())) return null

  const weekday = new Intl.DateTimeFormat('es-ES', { weekday: 'short' })
    .format(date)
    .replace('.', '')
  const day = date.getDate()
  const rawMonth = new Intl.DateTimeFormat('es-ES', { month: 'short' })
    .format(date)
    .replace('.', '')

  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  const monthMap: Record<string, string> = {
    ene: 'Ene',
    feb: 'Feb',
    mar: 'Mar',
    abr: 'Abr',
    may: 'May',
    jun: 'Jun',
    jul: 'Jul',
    ago: 'Ago',
    sep: 'Sep',
    sept: 'Sep',
    oct: 'Oct',
    nov: 'Nov',
    dic: 'Dic',
  }

  const cleanMonth = rawMonth.toLowerCase()
  const formattedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1)
  const formattedMonth =
    monthMap[cleanMonth] ||
    cleanMonth.charAt(0).toUpperCase() + cleanMonth.slice(1, 3)

  return `${formattedWeekday} ${day} ${formattedMonth} ${hours}:${minutes}h`
}

/**
 * Formatea el tiempo transcurrido desde una fecha de inicio hasta el tiempo actual en formato corto (ej. '14m', '2h 15m').
 *
 * @param startDateInput - Fecha de inicio (string ISO, Date, null o undefined).
 * @param nowTime - Timestamp en ms de la hora actual.
 * @returns Cadena con el tiempo transcurrido (ej. '14m', '2h 15m') o texto vacío si es inválida.
 */
export const formatElapsedTime = (
  startDateInput: string | Date | null | undefined,
  nowTime: number = Date.now()
): string => {
  if (!startDateInput) return ''

  const date = typeof startDateInput === 'string' ? new Date(startDateInput) : startDateInput
  const start = date.getTime()
  if (isNaN(start)) return ''

  const diffMs = Math.max(0, nowTime - start)
  const diffMinutes = Math.floor(diffMs / (1000 * 60))
  const hours = Math.floor(diffMinutes / 60)
  const minutes = diffMinutes % 60

  if (hours === 0) {
    return `${minutes}m`
  }
  if (minutes === 0) {
    return `${hours}h`
  }
  return `${hours}h ${minutes}m`
}
