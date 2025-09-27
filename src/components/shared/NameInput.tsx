"use client";

import clsx from "clsx";
import { ChangeEventHandler, RefObject } from "react";

import { useQuestions } from "@/contexts";
import { SET_NAME } from "@/reducers";

type NameInputProps = {
  readonly className?: string;
  inputTextRef?: RefObject<HTMLInputElement | null>;
};

export function NameInput({ className, inputTextRef }: NameInputProps) {
  const { state, dispatch } = useQuestions();

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
