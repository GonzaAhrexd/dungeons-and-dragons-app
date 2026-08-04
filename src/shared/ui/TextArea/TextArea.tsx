import './TextArea.css'
interface InputProps {
  name: string
  label?: string
  placeholder?: string
  defaultValue?: string
  htmlAttrs?: React.InputHTMLAttributes<HTMLTextAreaElement>
}

export const TextArea = ({
  name,
  label,
  placeholder,
  defaultValue,
  htmlAttrs,
}: InputProps) => {
  return (
    <div className="cmp-textarea">
      {label && <p>{label}</p>}
      <textarea {...{ name, placeholder, defaultValue, ...htmlAttrs }} />
    </div>
  )
}
