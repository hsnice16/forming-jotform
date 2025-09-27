import clsx from "clsx";
import { ReactNode } from "react";

type Move = "left" | "right" | "";

type QuestionMobileBoxProps = {
  readonly inView?: boolean;
  readonly inViewMove?: Move;
  readonly outView?: boolean;
  readonly outViewMove?: Move;
  readonly children: ReactNode;
  readonly isAnimateScale?: boolean;
};

export function QuestionMobileBox({
  inView,
  outView,
  children,
  inViewMove,
  outViewMove,
  isAnimateScale,
}: QuestionMobileBoxProps) {
  return (
    <div
      className={clsx(
        "bg-text rounded flex flex-col items-center justify-center p-6 absolute",
        {
          "move-in": inView,
          "move-out": outView,
          "animate-scale inset-x-6 inset-y-4": isAnimateScale,
          "move-in-left-mobile": inView && inViewMove === "left",
          "move-in-right-mobile": inView && inViewMove === "right",
          "move-out-left-mobile": outView && outViewMove === "left",
          "move-out-right-mobile": outView && outViewMove === "right",
        }
      )}
    >
      {children}
    </div>
  );
}
