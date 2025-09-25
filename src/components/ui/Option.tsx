import clsx from "clsx";
import { ReactNode } from "react";

type OptionProps = {
  readonly children: ReactNode;
  readonly isSelected?: boolean;
  readonly onClick?: () => void;
  readonly selectedInView?: boolean;
};

export function Option({
  onClick,
  children,
  isSelected,
  selectedInView,
}: OptionProps) {
  return (
    <span
      onClick={onClick}
      className={clsx(
        "text-sm sm:text-base cursor-pointer border rounded flex-1 flex items-center justify-start gap-2 min-w-[180px] sm:min-w-xs p-2.5 font-medium transition",
        {
          "border-text-gray": !isSelected,
          "animate-twinkle": isSelected && selectedInView,
          "border-input-border bg-input-shadow": isSelected,
        }
      )}
    >
      {children}
    </span>
  );
}
