import { Options, Question } from "@/components/ui";
import { useQuestions, useSharedStates } from "@/contexts";
import { SET_SINGLE_CHOICE } from "@/reducers";

export function SingleChoice() {
  const { handleNextClick } = useSharedStates();
  const { state, dispatch } = useQuestions();
  const { singleChoice } = state;

  function handleOptionClick(choice: string) {
    if (choice === singleChoice) {
      dispatch({ type: SET_SINGLE_CHOICE, payload: "" });
    } else {
      dispatch({ type: SET_SINGLE_CHOICE, payload: choice });
      setTimeout(() => handleNextClick(), 600);
    }
  }

  return (
    <Question
      showNextBtn
      showPreviousBtn
      subSectionClassName="gap-4 sm:gap-6"
      sectionClassName="mx-3 sm:mx-auto my-auto"
    >
      <h2 className="sm:font-semibold sm:text-2xl">
        This is single choice field
      </h2>

      <Options>
        {[
          "Type Option 1",
          "Type Option 2",
          "Type Option 3",
          "Type Option 4",
        ].map((option) => {
          const isSelected = singleChoice === option;

          return (
            <Options.Option
              key={option}
              isSelected={isSelected}
              onClick={() => handleOptionClick(option)}
            >
              <Options.Radio text={option} isSelected={isSelected} />
            </Options.Option>
          );
        })}
      </Options>
    </Question>
  );
}
