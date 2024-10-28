interface PaperProps {
  color?: "transparent" | "secondary" | "danger" | "primary";
  elevation?: 1 | 2 | 3;
  space?: 1 | 2 | 3;
  type?: "rounded" | "square";
  border?: boolean;
  children: React.ReactNode;
}

export const Paper = ({
  color = "primary",
  elevation = 2,
  space = 3,
  type = "rounded",
  border = true,
  children,
}: PaperProps) => {
  const colorStyles = {
    primary: "bg-white border-blue-500",
    secondary: "bg-blue-400 border-blue-500",
    danger: "bg-red-100 border-red-500",
    transparent: "bg-gray-200 border-gray-500",
  };

  const elevationStyles = {
    1: "shadow-md",
    2: "shadow-lg",
    3: "shadow-xl",
  };

  const spaceStyles = {
    1: "p-4",
    2: "p-6",
    3: "p-8",
  };

  const typeStyles = {
    rounded: "rounded-lg",
    square: "",
  };

  return (
    <div
      className={`w-full max-w-md ${border ? "border-b-2" : " "} ${colorStyles[color]} ${elevationStyles[elevation]} ${spaceStyles[space]} ${typeStyles[type]}`}
    >
      {children}
    </div>
  );
};
