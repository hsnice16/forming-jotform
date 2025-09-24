import clsx from "clsx";
import { ReactNode } from "react";

import { Checkbox, Option, Radio } from "@/components/ui";

type OptionsProps = {
  className?: string;
  children: ReactNode;
};

export function Options({ children, className }: OptionsProps) {
  return (
    <div
      className={clsx(
        "flex flex-wrap w-full gap-3 sm:gap-4 px-2 sm:px-4",
        className
      )}
    >
      {children}
    </div>
  );
}

Options.Radio = Radio;
Options.Option = Option;
Options.Checkbox = Checkbox;
