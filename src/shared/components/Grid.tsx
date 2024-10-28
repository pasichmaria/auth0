interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export const Grid = ({ children, className }: GridProps) => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center bg-gray-200 p-4 ${className}`}
    >
      {children}
    </div>
  );
};
