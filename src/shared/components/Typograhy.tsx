interface TypographyProps {
  center?: boolean;
  children: React.ReactNode;
  type?: "primary" | "secondary" | "success" | "warning" | "danger";
  strong?: boolean;
  italic?: boolean;
  underline?: boolean;
  delete?: boolean;
  code?: boolean;
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export const Typography = ({
  center = false,
  children,
  type = "primary",
  strong = false,
  italic = false,
  underline = false,
  delete: del = false,
  code = false,
  level,
  className = "",
}: TypographyProps) => {
  const typeClasses: Record<string, string> = {
    primary: "text-gray-900",
    secondary: "text-gray-100",
    success: "text-green-600",
    warning: "text-yellow-500",
    danger: "text-red-600",
  };

  const baseClass = `${typeClasses[type]} ${strong ? "font-semibold" : ""} 
    ${italic ? "italic" : ""} ${underline ? "underline" : ""} ${center ? "text-center" : ""} ${className}`;

  const content = del ? (
    <del>{children}</del>
  ) : code ? (
    <code className="rounded bg-blue-200 p-1">{children}</code>
  ) : (
    children
  );

  if (level) {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    const levelClass = `text-${level === 1 ? "3xl" : level === 2 ? "2xl" : level === 3 ? "xl" : level === 4 ? "lg" : "base"}`;

    return (
      <HeadingTag className={`${baseClass} ${levelClass}`}>
        {content}
      </HeadingTag>
    );
  }

  return <p className={`${baseClass} text-base`}>{content}</p>;
};
