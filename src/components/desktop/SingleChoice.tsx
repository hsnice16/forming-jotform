import { SingleChoiceOptions } from "@/components/shared";
import { Question } from "@/components/ui";

export function SingleChoice() {
  return (
    <Question
      showNextBtn
      showPreviousBtn
      sectionClassName="mx-3"
      subSectionClassName="gap-4 sm:gap-6"
    >
      <h2 className="sm:font-semibold sm:text-2xl">
        This is single choice field
      </h2>

      <SingleChoiceOptions />
    </Question>
  );
}
