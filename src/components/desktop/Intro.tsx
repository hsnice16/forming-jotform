import { IntroTextContent } from "@/components/shared";
import { Section, Button } from "@/components/ui";
import { useSharedStates } from "@/contexts";

export function Intro() {
  const { handleNextQuestionNumUpdate } = useSharedStates();

  return (
    <Section className="w-[336px] 2xs:w-[366px] xs:w-[23.75rem] sm:w-2xl lg:w-3xl bg-secondary-background gap-3 sm:gap-4 m-auto">
      <Section.Sub className="gap-3">
        <IntroTextContent />
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
