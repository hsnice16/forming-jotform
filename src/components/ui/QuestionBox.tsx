import clsx from "clsx";
import { ReactNode } from "react";

type Move = "left" | "right" | "up" | "";

type QuestionBoxProps = {
  readonly inView?: boolean;
  readonly inViewMove?: Move;
  readonly outView?: boolean;
  readonly className?: string;
  readonly outViewMove?: Move;
  readonly children: ReactNode;
};

export function QuestionBox({
  inView,
  outView,
  children,
  className,
  inViewMove,
  outViewMove,
}: QuestionBoxProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-3 h-screen w-screen",
        {
          "move-in": inView,
          "move-out": outView,
          "move-in-up": inView && inViewMove === "up",
          "move-in-left": inView && inViewMove === "left",
          "move-in-right": inView && inViewMove === "right",
          "move-out-left": outView && outViewMove === "left",
          "move-out-right": outView && outViewMove === "right",
        },
        className
      )}
    >
      {children}

      {/* Handles Error */}
      {/* <div className="mx-3 min-w-[23.75rem] sm:min-w-[52rem] sm:max-w-[52rem] bg-error text-text rounded text-base sm:text-lg font-semibold text-center py-2">
        There are errors on the form. Please fix them before continuing.
      </div> */}
    </div>
  );
}
