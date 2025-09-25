import clsx from "clsx";
import { ReactNode } from "react";

type SubProps = {
  readonly className?: string;
  readonly children: ReactNode;
};

export function Sub({ children, className }: SubProps) {
  return (
    <div
      className={clsx(
        "py-8 px-4 sm:px-8 flex flex-col justify-center items-center",
        className
      )}
    >
      {children}
    </div>
  );
}
