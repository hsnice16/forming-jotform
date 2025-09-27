"use client";

import { useEffect, useRef } from "react";

import { NameInput } from "@/components/shared";
import { Question } from "@/components/ui";

export function Name() {
  const inputTextRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      inputTextRef.current?.focus();
    }, 350);

    return function clean() {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <Question showNextBtn sectionClassName="mx-3">
      <h2 className="sm:font-semibold sm:text-2xl">What&apos;s your name?</h2>
      <p className="text-sm sm:text-base sm:font-medium text-text-gray -mt-1">
        this is a Short Text field
      </p>

      <NameInput className="input-box-shadow" inputTextRef={inputTextRef} />
    </Question>
  );
}
