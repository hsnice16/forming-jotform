import {
  Intro,
  Name,
  SingleChoice,
  MultipleChoices,
  DropdownInput,
} from "@/components/mobile";
import { useSharedStates } from "@/contexts";

export function MobilePage() {
  const { questionNum } = useSharedStates();
  const { now, prev } = questionNum;

  return (
    <main className="h-dvh flex flex-col overflow-hidden">
      {prev === null && now === 0 ? <Intro /> : <DropdownInput />}
    </main>
  );
}
