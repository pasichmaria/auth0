interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "transparent" | "danger" | "bordered";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  onClick,
  fullWidth,
  children,
  type = "button",
  size = "md",
  className = "",
  variant = "primary",
}: ButtonProps) => {
  const variantStyles = {
    primary: "bg-blue-500 border border-blue-500 text-white hover:bg-blue-600",
    secondary:
      "bg-cyan-500 border border-cyan-500 text-white hover:bg-cyan-600",
    transparent: "bg-transparent text-gray-800 hover:bg-gray-200",
    danger: "bg-red-500 border border-red-500 text-white hover:bg-red-600",
    bordered: "border border-blue-500 text-blue-500 hover:bg-blue-100",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`rounded-lg font-semibold shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-300 ${fullWidth ? "w-full" : ""} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
