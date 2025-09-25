import { useState } from "react";

import { Question, Options } from "@/components/ui";
import { useQuestions } from "@/contexts";
import { REMOVE_MULTIPLE_CHOICE, SET_MULTIPLE_CHOICES } from "@/reducers";

export function MultipleChoices() {
  const [selected, setSelected] = useState("");
  const { state, dispatch } = useQuestions();
  const { multipleChoices } = state;

  function handleOptionClick(choice: string) {
    if (multipleChoices.includes(choice)) {
      dispatch({ type: REMOVE_MULTIPLE_CHOICE, payload: choice });
    } else {
      setSelected(choice);
      dispatch({ type: SET_MULTIPLE_CHOICES, payload: choice });
    }
  }

  return (
    <Question
      showSubmitBtn
      showPreviousBtn
      sectionClassName="mx-3"
      subSectionClassName="gap-4 sm:gap-6"
    >
      <h2 className="sm:font-semibold sm:text-2xl">
        This is multi choice field
      </h2>

      <Options>
        {[
          "Type Option 1",
          "Type Option 2",
          "Type Option 3",
          "Type Option 4",
        ].map((option) => {
          const selectedInView = selected === option;
          const isSelected = multipleChoices.includes(option);

          return (
            <Options.Option
              key={option}
              isSelected={isSelected}
              selectedInView={selectedInView}
              onClick={() => handleOptionClick(option)}
            >
              <Options.Checkbox text={option} isSelected={isSelected} />
            </Options.Option>
          );
        })}
      </Options>
    </Question>
  );
}
