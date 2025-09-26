import Image from "next/image";

import { Button } from "@/components/ui";
import { TOTAL_QUESTIONS } from "@/constants";
import { useSharedStates } from "@/contexts";

type MobileButtonsProps = {
  readonly showNextBtn?: boolean;
  readonly showSubmitBtn?: boolean;
  readonly showPreviousBtn?: boolean;
  readonly showQuestionSteps?: boolean;
};

export function MobileButtons({
  showNextBtn,
  showSubmitBtn,
  showPreviousBtn,
  showQuestionSteps,
}: MobileButtonsProps) {
  const { questionNum, handleNextClick, handlePreviousClick } =
    useSharedStates();

  return (
    <Button.Box className="h-[68px] bg-primary relative">
      {showPreviousBtn ? (
        <button
          onClick={handlePreviousClick}
          className="absolute left-2 h-full z-10 top-0 bottom-0 opacity-70"
        >
          <Image
            width={36}
            height={36}
            alt="left-arrow"
            src="/mobile-left-arrow.svg"
          />
        </button>
      ) : null}

      {showQuestionSteps ? (
        <span className="bg-primary-dark rounded py-2.5 px-12">
          <span className="text-text">{questionNum.now}</span>{" "}
          <span className="text-text-slate-200 opacity-75">
            of {TOTAL_QUESTIONS - 1}
          </span>
        </span>
      ) : null}

      {showNextBtn ? (
        <button
          onClick={handleNextClick}
          className="absolute right-2 h-full z-10 top-0 bottom-0"
        >
          <Image
            width={36}
            height={36}
            alt="right-arrow"
            src="/mobile-right-arrow.svg"
          />
        </button>
      ) : null}

      {showSubmitBtn ? (
        <button className="uppercase text-text bg-primary-dark rounded py-2.5 px-16">
          Submit
        </button>
      ) : null}
    </Button.Box>
  );
}
