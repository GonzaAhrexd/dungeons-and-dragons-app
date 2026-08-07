import './TextArea.css'
interface TextAreaProps {
  name: string
  label?: string
  placeholder?: string
  defaultValue?: string
  variant?: 'gold' | 'paper'
  htmlAttrs?: React.InputHTMLAttributes<HTMLTextAreaElement>
}

export const TextArea = ({
  name,
  label,
  placeholder,
  defaultValue,
  variant = 'gold',
  htmlAttrs,
}: TextAreaProps) => {
  return (
    <div className={`cmp-textarea ${variant}`}>
      {label && <p>{label}</p>}
      <textarea {...{ name, placeholder, defaultValue, ...htmlAttrs }} />
    </div>
  )
}
