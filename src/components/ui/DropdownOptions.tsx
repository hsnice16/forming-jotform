import clsx from "clsx";
import { ReactNode } from "react";

import { DropdownOption } from "@/components/ui";

type DropdownOptions = {
  readonly show?: boolean;
  readonly children: ReactNode;
};

export function DropdownOptions({ children, show }: DropdownOptions) {
  return (
    <div
      className={clsx(
        "absolute z-10 flex flex-col border bg-text rounded w-[288px] 2xs:w-[318px] xs:w-[20.75rem] sm:w-[36rem] lg:w-[46rem] transition-[max-height, opacity] duration-[0.2s]",
        {
          "max-h-[200px] overflow-y-auto opacity-100 pointer-events-auto": show,
          "max-h-0 border-transparent overflow-hidden opacity-0 pointer-events-none":
            !show,
        }
      )}
    >
      {children}
    </div>
  );
}

DropdownOptions.Option = DropdownOption;
