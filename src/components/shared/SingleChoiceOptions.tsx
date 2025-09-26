import { useState } from "react";

import { Options } from "@/components/ui";
import { useQuestions, useSharedStates } from "@/contexts";
import { SET_SINGLE_CHOICE } from "@/reducers";

type SingleChoiceOptionsProps = {
  readonly optionsClassName?: string;
};

export function SingleChoiceOptions({
  optionsClassName,
}: SingleChoiceOptionsProps) {
  const { handleNextClick } = useSharedStates();
  const [selected, setSelected] = useState("");

  const { state, dispatch } = useQuestions();
  const { singleChoice } = state;

  function handleOptionClick(choice: string) {
    if (choice === singleChoice) {
      dispatch({ type: SET_SINGLE_CHOICE, payload: "" });
    } else {
      setSelected(choice);

      dispatch({ type: SET_SINGLE_CHOICE, payload: choice });
      setTimeout(() => handleNextClick(), 600);
    }
  }

  return (
    <Options className={optionsClassName}>
      {["Type Option 1", "Type Option 2", "Type Option 3", "Type Option 4"].map(
        (option) => {
          const isSelected = singleChoice === option;
          const selectedInView = selected === option;

          return (
            <Options.Option
              key={option}
              isSelected={isSelected}
              selectedInView={selectedInView}
              onClick={() => handleOptionClick(option)}
            >
              <Options.Radio text={option} isSelected={isSelected} />
            </Options.Option>
          );
        }
      )}
    </Options>
  );
}
