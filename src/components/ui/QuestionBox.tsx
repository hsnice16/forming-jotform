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
        "flex h-screen w-screen",
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
    </div>
  );
}
