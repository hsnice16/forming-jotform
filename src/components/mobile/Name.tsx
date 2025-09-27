import { NameInput } from "@/components/shared";

export function Name() {
  return (
    <>
      <h2 className="text-lg">What&apos;s your name?</h2>
      <p className="text-base text-text-gray">this is a Short Text field</p>
      <NameInput />
    </>
  );
}
