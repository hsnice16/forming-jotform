import clsx from "clsx";
import { ReactNode } from "react";

import { Sub } from "@/components/ui";

type SectionProps = {
  readonly className?: string;
  readonly children: ReactNode;
};

export function Section({ children, className }: SectionProps) {
  return (
    <section
      className={clsx(
        "flex flex-col justify-center items-center rounded-md overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
}

Section.Sub = Sub;
