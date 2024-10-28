interface InputProps {
  id?: string;
  name?: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

export const Input = ({
  id,
  name,
  className = "",
  value,
  onChange,
  placeholder,
  type = "text",
}: InputProps) => {
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className={`rounded-lg border border-blue-300 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm transition hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
    />
  );
};
