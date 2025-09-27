import clsx from "clsx";
import { useEffect, useState } from "react";

import { TOTAL_QUESTIONS } from "@/constants";
import { useSharedStates } from "@/contexts";

export function Steps() {
  const [showSteps, setShowSteps] = useState(false);
  const { questionNum } = useSharedStates();
  const { now } = questionNum;

  useEffect(() => {
    if (showSteps) {
      return;
    }

    if (TOTAL_QUESTIONS >= 3 && now >= 2) {
      setShowSteps(true);
    }
  }, [now, showSteps]);

  if (!showSteps) {
    return null;
  }

  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col gap-4 items-center justify-center w-[338px] 2xs:w-[368px] xs:w-[25.75rem] sm:w-[44rem] lg:w-[54rem]">
      <div className="hidden md:flex w-full items-center justify-between relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:opacity-0 before:animate-stretch-right before:h-[2px] before:bg-step-line-gray">
        {new Array(TOTAL_QUESTIONS - 1).fill(0).map((_, index) => {
          const isActive = index === now - 1;

          return (
            <span
              key={index}
              className={clsx(
                "rounded-full z-10 opacity-0 animate-scale-opacity transition",
                {
                  "w-[7.5px] h-[7.5px] bg-step-circle-gray": !isActive,
                  "w-[16px] h-[16px] bg-text flex justify-center items-center":
                    isActive,
                }
              )}
            >
              <span
                className={clsx({
                  "w-[12px] h-[12px] bg-text border border-body-background rounded-full":
                    isActive,
                })}
              />
            </span>
          );
        })}
      </div>

      <span className="bg-dark-background-100 rounded py-2.5 px-12 opacity-0 animate-scale-opacity">
        <span className="text-text">{questionNum.now}</span>{" "}
        <span className="text-text-slate-200 opacity-75">
          of {TOTAL_QUESTIONS - 1}
        </span>
      </span>
    </div>
  );
}
