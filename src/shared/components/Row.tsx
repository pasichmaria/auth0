import type React from "react";

interface RowProps {
  children: React.ReactNode;
  className?: string;
}

export const Row = ({ children, className }: RowProps) => {
  return (
    <div
      className={`flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ${className}`}
    >
      {children}
    </div>
  );
};
