import { NameInput } from "@/components/shared";
import { MobileButtons, Section } from "@/components/ui";

export function Name() {
  return (
    <>
      <Section.Sub className="flex-1">
        <div className="bg-text flex-1 w-full rounded flex flex-col items-center justify-center p-6">
          <h2 className="text-lg">What&apos;s your name?</h2>
          <p className="text-base text-text-gray">this is a Short Text field</p>
          <NameInput />
        </div>
      </Section.Sub>

      <MobileButtons showNextBtn showQuestionSteps />
    </>
  );
}
