import { MultipleChoiceOptions } from "@/components/shared";
import { MobileButtons, Section } from "@/components/ui";

export function MultipleChoices() {
  return (
    <>
      <Section.Sub className="flex-1">
        <div className="bg-text flex-1 w-full rounded flex flex-col items-center justify-center p-6">
          <h2 className="text-lg">This is multi choice field</h2>
          <MultipleChoiceOptions optionsClassName="mt-5" />
        </div>
      </Section.Sub>

      <MobileButtons showNextBtn showPreviousBtn showQuestionSteps />
    </>
  );
}
