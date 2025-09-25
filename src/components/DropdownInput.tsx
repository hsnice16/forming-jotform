import { useState } from "react";

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
        <button
          onClick={() => setShowDropdownOptions((prev) => !prev)}
          className="border rounded w-full flex justify-between items-center p-2.5 sm:px-4 sm:py-2.5 cursor-pointer mt-5"
        >
          <span className="font-semibold text-sm sm:text-base">
            {dropdownInput || "Please Select"}
          </span>
          <span className="border-l-[4.5px] sm:border-l-[5px] border-l-transparent border-r-[4.5px] sm:border-r-[5px] border-r-transparent border-t-[6px] sm:border-t-[7px] border-t-text-gray" />
        </button>

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
