import { ChangeEventHandler } from "react";

import { DropdownInputButton } from "@/components/shared";
import { useQuestions } from "@/contexts";
import { SET_DROPDOWN_INPUT } from "@/reducers";

export function DropdownInput() {
  const { state, dispatch } = useQuestions();
  const { dropdownInput } = state;

  const handleSelectOnChange: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const option = event.target.value;

    if (option === "Please Select") {
      dispatch({ type: SET_DROPDOWN_INPUT, payload: "" });
    } else if (dropdownInput !== option) {
      dispatch({ type: SET_DROPDOWN_INPUT, payload: option });
    }
  };

  return (
    <>
      <h2 className="text-lg">This is a dropdown</h2>
      <p className="text-base text-text-gray">This is a description</p>

      <div className="w-full relative">
        <DropdownInputButton dropdownInput={dropdownInput} />
        <select
          className="absolute top-0 z-10 opacity-0 border rounded w-full flex justify-between items-center p-2 cursor-pointer mt-5"
          value={dropdownInput || "Please Select"}
          onChange={handleSelectOnChange}
        >
          {["Please Select", "Option 1", "Option 2"].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Handle Error */}
      {/* <div className="bg-error text-text rounded text-xs sm:text-sm py-1 px-2 mt-2">
            This field is required.
          </div> */}

      {/* Handle Error */}
      {/* <div className="bg-error text-text rounded text-xs font-semibold text-center py-1 px-2 mt-2">
            There are errors on the form. Please fix them before continuing.
          </div> */}
    </>
  );
}
