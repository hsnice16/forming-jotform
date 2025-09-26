import clsx from "clsx";
import { ChangeEventHandler, useEffect, useRef } from "react";

import { useQuestions } from "@/contexts";
import { SET_NAME } from "@/reducers";

type NameInputProps = {
  readonly className?: string;
};

export function NameInput({ className }: NameInputProps) {
  const inputTextRef = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useQuestions();

  useEffect(() => {
    const timerId = setTimeout(() => {
      inputTextRef.current?.focus();
    }, 350);

    return function clean() {
      clearTimeout(timerId);
    };
  }, []);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({ type: SET_NAME, payload: event.target.value });
  };

  return (
    <input
      type="text"
      ref={inputTextRef}
      value={state.name}
      onChange={handleInputChange}
      className={clsx(
        "border border-text-gray mt-5 w-full rounded text-sm sm:text-lg py-2 px-4 outline-none transition focus:border-input-border",
        className
      )}
    />
  );
}
