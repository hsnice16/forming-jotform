import { ChangeEventHandler } from "react";

import { Question } from "@/components/ui";
import { useQuestions } from "@/contexts";
import { SET_NAME } from "@/reducers";

export function Name() {
  const { state, dispatch } = useQuestions();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({ type: SET_NAME, payload: event.target.value });
  };

  return (
    <Question showNextBtn sectionClassName="mx-3 sm:mx-auto my-auto">
      <h2 className="sm:font-semibold sm:text-2xl">What&apos;s your name?</h2>
      <p className="text-sm sm:text-base sm:font-medium text-text-gray -mt-1">
        this is a Short Text field
      </p>

      <input
        type="text"
        value={state.name}
        onChange={handleInputChange}
        className="border border-text-gray mt-5 w-full rounded text-sm sm:text-lg py-2 px-4 outline-none focus:border-input-border input-box-shadow"
      />
    </Question>
  );
}
