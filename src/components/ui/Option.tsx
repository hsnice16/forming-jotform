import clsx from "clsx";
import { ReactNode } from "react";

type OptionProps = {
  children: ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
};

export function Option({ children, isSelected, onClick }: OptionProps) {
  return (
    <span
      onClick={onClick}
      className={clsx(
        "text-sm sm:text-base cursor-pointer border rounded flex-1 flex items-center justify-start gap-2 min-w-[180px] sm:min-w-xs p-2.5 font-medium transition",
        {
          "border-text-gray": !isSelected,
          "border-input-border bg-input-shadow animate-twinkle": isSelected,
        }
      )}
    >
      {children}
    </span>
  );
}
