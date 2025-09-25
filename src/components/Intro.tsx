import Image from "next/image";

import { Section, Button } from "@/components/ui";
import { TOTAL_QUESTIONS } from "@/constants";
import { useSharedStates } from "@/contexts";

export function Intro() {
  const { handleNextQuestionNumUpdate } = useSharedStates();

  return (
    <Section className="w-[366px] xs:w-[23.75rem] sm:w-3xl bg-secondary-background gap-3 sm:gap-4 m-auto">
      <Section.Sub className="gap-3">
        <Image src="/logo.png" alt="logo" width={80} height={90} />

        <h1 className="text-[26px] sm:text-3xl font-bold text-text sm:mb-1">
          Welcome
        </h1>
        <p className="text-base sm:text-lg text-light-text text-center">
          Hi there, please fill out and submit this form.
        </p>
        <p className="text-xs sm:text-base text-light-text opacity-75">
          {TOTAL_QUESTIONS - 1} Questions
        </p>
      </Section.Sub>

      <Button.Box>
        <Button
          onClick={handleNextQuestionNumUpdate}
          className="right-arrow-container justify-center p-3"
        >
          <Button.Text text="Start" />
          <Button.RightIcon />
        </Button>
      </Button.Box>
    </Section>
  );
}
