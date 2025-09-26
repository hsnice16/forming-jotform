import { IntroTextContent } from "@/components/shared";
import { Button, Section } from "@/components/ui";
import { useSharedStates } from "@/contexts";

export function Intro() {
  const { handleNextQuestionNumUpdate } = useSharedStates();

  return (
    <>
      <Section.Sub className="flex-1 gap-3">
        <IntroTextContent />
      </Section.Sub>

      <Button.Box className="h-[72px]">
        <Button
          onClick={handleNextQuestionNumUpdate}
          className="right-arrow-container h-full p-3 justify-center items-center"
        >
          <Button.Text text="Start" />
          <Button.RightIcon />
        </Button>
      </Button.Box>
    </>
  );
}
