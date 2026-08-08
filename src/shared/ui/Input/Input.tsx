import "./Input.css";
interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email";
  defaultValue?: string;
  variant?: "gold" | "paper";
  handlingClass?: string;
  htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Input = ({
  name,
  label,
  placeholder,
  type = "text",
  defaultValue,
  variant = "gold",
  handlingClass,
  htmlAttrs,
}: InputProps) => {
  return (
    <div className={`cmp-input ${variant} ${handlingClass}`}>
      {label && <p>{label}</p>}
      <input {...{ name, placeholder, type, defaultValue, ...htmlAttrs }} />
    </div>
  );
};
