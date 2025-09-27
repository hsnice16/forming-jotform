import { SingleChoiceOptions } from "@/components/shared";

export function SingleChoice() {
  return (
    <>
      <h2 className="text-lg">This is single choice field</h2>
      <SingleChoiceOptions optionsClassName="mt-5" />
    </>
  );
}
