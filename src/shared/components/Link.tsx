import { Link as LinkTanstack } from "@tanstack/react-router";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  search?: Record<string, string>;
  params?: Record<string, string>;
  variant?: "outlined" | "filled";
  className?: string;
}

export const Link = ({
  to,
  children,
  search = {},
  params = {},
  variant = "outlined",
  className,
}: LinkProps) => {
  const baseStyles =
    "rounded-lg px-6 py-3 text-center font-semibold shadow-md transition";

  const variantStyles = {
    outlined: "border border-blue-500 text-blue-500",
    filled: "bg-blue-400 text-white hover:bg-blue-600",
  };

  return (
    <LinkTanstack
      to={to}
      search={search}
      params={params}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </LinkTanstack>
  );
};
