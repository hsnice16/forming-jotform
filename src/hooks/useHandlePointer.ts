"use client";

import { useEffect, useRef } from "react";

import { TOTAL_QUESTIONS } from "@/constants";
import { useSharedStates } from "@/contexts";

export function useHandlePointer() {
  const {
    questionNum,
    handleNextQuestionNumUpdate,
    handlePreviousQuestionNumUpdate,
  } = useSharedStates();

  const pointerStartXRef = useRef<number>(null);
  const pointerEndXRef = useRef<number>(null);

  useEffect(() => {
    function handleSwipe() {
      if (
        pointerEndXRef.current === null ||
        pointerStartXRef.current === null
      ) {
        return;
      }

      const swipedLeft = pointerEndXRef.current < pointerStartXRef.current;
      const swipedRight = pointerEndXRef.current > pointerStartXRef.current;

      if (swipedLeft) {
        if (questionNum.now + 1 >= TOTAL_QUESTIONS) {
          return;
        }

        handleNextQuestionNumUpdate();
        return;
      }

      if (swipedRight) {
        if (questionNum.now - 1 <= 0) {
          return;
        }

        handlePreviousQuestionNumUpdate();
      }
    }

    function handleTouchEnd(event: TouchEvent) {
      pointerEndXRef.current = event.changedTouches[0].screenX;
      handleSwipe();
    }

    function handleTouchStart(event: TouchEvent) {
      pointerStartXRef.current = event.changedTouches[0].screenX;
    }

    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchstart", handleTouchStart);

    return function () {
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchstart", handleTouchStart);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionNum.now]);
}
