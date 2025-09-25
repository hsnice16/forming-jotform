import clsx from "clsx";
import { ReactNode } from "react";

import { Section, Button, QuestionBox } from "@/components/ui";
import { useSharedStates } from "@/contexts";

type QuestionProps = {
  readonly children: ReactNode;
  readonly showNextBtn?: boolean;
  readonly showPreviousBtn?: boolean;
  readonly sectionClassName?: string;
  readonly subSectionClassName?: string;
};

export function Question({
  children,
  showNextBtn,
  showPreviousBtn,
  sectionClassName,
  subSectionClassName,
}: QuestionProps) {
  const { handleNextClick, handlePreviousClick } = useSharedStates();

  return (
    <Section
      className={clsx(
        "min-w-[23.75rem] sm:min-w-[52rem] sm:max-w-[52rem] bg-text gap-1",
        sectionClassName
      )}
    >
      <Section.Sub className={clsx("gap-1 w-full", subSectionClassName)}>
        {children}
      </Section.Sub>

      <Button.Box>
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
      </Button.Box>
    </Section>
  );
}

Question.Box = QuestionBox;
