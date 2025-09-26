"use client";

import { useState } from "react";

import { DropdownInputButton } from "@/components/shared";
import { DropdownOptions, Question } from "@/components/ui";
import { useQuestions } from "@/contexts";
import { SET_DROPDOWN_INPUT } from "@/reducers";

export function DropdownInput() {
  const [showDropdownOptions, setShowDropdownOptions] = useState(false);
  const { state, dispatch } = useQuestions();
  const { dropdownInput } = state;

  function handleOptionClick(option: string) {
    if (option === "Please Select") {
      dispatch({ type: SET_DROPDOWN_INPUT, payload: "" });
    } else if (dropdownInput !== option) {
      dispatch({ type: SET_DROPDOWN_INPUT, payload: option });
    }

    setShowDropdownOptions(false);
  }

  return (
    <Question showSubmitBtn showPreviousBtn sectionClassName="mx-3">
      <h2 className="sm:font-semibold sm:text-2xl">This is a dropdown</h2>
      <p className="text-xs sm:text-base sm:font-medium text-text-gray -mt-0.5 sm:mt-1">
        This is description
      </p>

      <div className="w-full px-2 sm:px-4">
        <DropdownInputButton
          dropdownInput={dropdownInput}
          onClick={() => setShowDropdownOptions((prev) => !prev)}
        />

        <DropdownOptions show={showDropdownOptions}>
          {["Please Select", "Option 1", "Option 2"].map(
            (option, index, array) => {
              const isLast = index === array.length - 1;
              const isSelected =
                option === dropdownInput ||
                (dropdownInput === "" && index === 0);

              return (
                <DropdownOptions.Option
                  key={option}
                  text={option}
                  isLast={isLast}
                  isSelected={isSelected}
                  onClick={() => handleOptionClick(option)}
                />
              );
            }
          )}
        </DropdownOptions>
      </div>
    </Question>
  );
}
