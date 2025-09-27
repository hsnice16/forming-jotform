"use client";

import { useEffect } from "react";

import { useSharedStates } from "@/contexts";
import { TOTAL_QUESTIONS } from "@/constants";

export function useHandleKeydown() {
  const {
    questionNum,
    handleNextQuestionNumUpdate,
    handlePreviousQuestionNumUpdate,
  } = useSharedStates();

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Enter") {
        event.preventDefault();
        handleNextQuestionNumUpdate();

        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (questionNum.now === 0 || questionNum.now - 1 <= 0) {
          return;
        }

        handlePreviousQuestionNumUpdate();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (questionNum.now === 0 || questionNum.now + 1 >= TOTAL_QUESTIONS) {
          return;
        }

        handleNextQuestionNumUpdate();
        return;
      }
    }

    document.addEventListener("keydown", handleKeydown);

    return function () {
      document.removeEventListener("keydown", handleKeydown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionNum]);
}
