import { MultipleChoiceOptions } from "@/components/shared";

export function MultipleChoices() {
  return (
    <>
      <h2 className="text-lg">This is multi choice field</h2>
      <MultipleChoiceOptions optionsClassName="mt-5" />
    </>
  );
}
