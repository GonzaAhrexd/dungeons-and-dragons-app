import "./Input.css";
interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email";
  defaultValue?: string;
  htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Input = ({
  name,
  label,
  placeholder,
  type = "text",
  defaultValue,
  htmlAttrs,
}: InputProps) => {
  return (
    <div className="cmp-input">
      {label && <p>{label}</p>}
      <input {...{ name, placeholder, type, defaultValue, ...htmlAttrs }} />
    </div>
  );
};
