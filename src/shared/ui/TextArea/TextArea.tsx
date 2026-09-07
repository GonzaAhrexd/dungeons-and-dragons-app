import './TextArea.css'
interface TextAreaProps {
  id?: string
  name: string
  label?: string
  placeholder?: string
  defaultValue?: string
  variant?: 'gold' | 'paper'
  htmlAttrs?: React.InputHTMLAttributes<HTMLTextAreaElement>
}

export const TextArea = ({
  id,
  name,
  label,
  placeholder,
  defaultValue,
  variant = 'gold',
  htmlAttrs,
}: TextAreaProps) => {
  const textareaId = id || htmlAttrs?.id || name
  return (
    <div className={`cmp-textarea ${variant}`}>
      {label && <p>{label}</p>}
      <textarea
        {...{
          id: textareaId,
          name,
          placeholder,
          defaultValue,
          ...htmlAttrs,
        }}
      />
    </div>
  )
}
