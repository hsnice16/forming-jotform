import clsx from "clsx";
import { ReactNode } from "react";

import { Box, LeftIcon, RightIcon, Text } from "@/components/ui";

type ButtonProps = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
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

Button.Box = Box;
Button.Text = Text;
Button.LeftIcon = LeftIcon;
Button.RightIcon = RightIcon;
