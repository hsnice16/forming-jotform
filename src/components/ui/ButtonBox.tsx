import clsx from "clsx";
import { ReactNode } from "react";

type ButtonBoxProps = {
  readonly className?: string;
  readonly children: ReactNode;
};

export function ButtonBox({ children, className }: ButtonBoxProps) {
  return (
    <div className={clsx("w-full flex items-center justify-center", className)}>
      {children}
    </div>
  );
}
