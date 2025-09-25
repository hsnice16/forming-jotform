import clsx from "clsx";
import { ReactNode } from "react";

import { ButtonBox, LeftIcon, RightIcon, Text } from "@/components/ui";

type ButtonProps = {
  readonly className?: string;
  readonly children: ReactNode;
  readonly onClick?: () => void;
};

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-primary cursor-pointer flex-1 flex items-baseline gap-2 sm:gap-4 uppercase sm:text-lg text-text font-medium",
        className
      )}
    >
      {children}
    </button>
  );
}

Button.Text = Text;
Button.Box = ButtonBox;
Button.LeftIcon = LeftIcon;
Button.RightIcon = RightIcon;
