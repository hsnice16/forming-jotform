import clsx from "clsx";
import { ReactNode } from "react";

import { Section, Button, QuestionBox } from "@/components/ui";
import { useSharedStates } from "@/contexts";

type QuestionProps = {
  readonly children: ReactNode;
  readonly showNextBtn?: boolean;
  readonly showSubmitBtn?: boolean;
  readonly showPreviousBtn?: boolean;
  readonly sectionClassName?: string;
  readonly subSectionClassName?: string;
};

export function Question({
  children,
  showNextBtn,
  showSubmitBtn,
  showPreviousBtn,
  sectionClassName,
  subSectionClassName,
}: QuestionProps) {
  const { handleNextClick, handlePreviousClick } = useSharedStates();

  return (
    <Section
      className={clsx(
        "w-[336px] 2xs:w-[366px] xs:w-[23.75rem] sm:w-[42rem] lg:w-[52rem] bg-text gap-1",
        sectionClassName
      )}
    >
      <Section.Sub className={clsx("gap-1 w-full", subSectionClassName)}>
        {children}
      </Section.Sub>

      <Button.Box className="relative">
        {/* Handles Error */}
        {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-error text-text rounded text-xs sm:text-sm py-1 px-2 z-10">
          This field is required.
        </div> */}

        {showPreviousBtn ? (
          <Button
            onClick={handlePreviousClick}
            className="border-r-[1px] border-light-border justify-start p-3 sm:p-4 pl-6 [&_*]:opacity-50 hover:[&_*]:opacity-75 [&_*]:transition-opacity [&_*]:duration-500"
          >
            <Button.LeftIcon />
            <Button.Text text="Previous" />
          </Button>
        ) : null}

        {showNextBtn ? (
          <Button
            onClick={handleNextClick}
            className="right-arrow-container justify-end p-3 sm:p-4 pr-6"
          >
            <Button.Text text="Next" />
            <Button.RightIcon />
          </Button>
        ) : null}

        {showSubmitBtn ? (
          <Button className="justify-end p-3 sm:p-4 !bg-primary-dark">
            <Button.Text text="Submit" className="mr-4" />
          </Button>
        ) : null}
      </Button.Box>
    </Section>
  );
}

Question.Box = QuestionBox;
