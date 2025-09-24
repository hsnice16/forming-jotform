import clsx from "clsx";
import { ReactNode } from "react";

type BoxProps = {
  className?: string;
  children: ReactNode;
};

export function Box({ children, className }: BoxProps) {
  return (
    <div className={clsx("w-full flex items-center justify-center", className)}>
      {children}
    </div>
  );
}
