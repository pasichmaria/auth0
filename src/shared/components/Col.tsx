interface ColProps {
  children: React.ReactNode;
  gap?: number;
  className?: string;
}

export const Col = ({ children, className = "", gap = 4 }: ColProps) => {
  const gapClass = `space-y-${gap}`;

  return (
    <div className={`flex flex-col ${gapClass} ${className}`}>{children}</div>
  );
};
