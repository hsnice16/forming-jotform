"use client";

import { createContext, ReactNode, useContext, useState } from "react";

import { TOTAL_QUESTIONS } from "@/constants";
import { QuestionNumType, SharedStatesContextType } from "@/types";

const SharedStatesContext = createContext<SharedStatesContextType>({
  setQuestionNum: () => {},
  handleNextClick: () => {},
  handlePreviousClick: () => {},
  questionNum: { prev: null, now: 0 },
  handleNextQuestionNumUpdate: () => {},
  handlePreviousQuestionsNumUpdate: () => {},
});

type SharedStatesProviderType = {
  readonly children: ReactNode;
};

export function SharedStatesProvider({ children }: SharedStatesProviderType) {
  const [questionNum, setQuestionNum] = useState<QuestionNumType>({
    now: 0,
    prev: null,
  });

  function handleNextQuestionNumUpdate() {
    setQuestionNum((prevValue) =>
      prevValue.now + 1 >= TOTAL_QUESTIONS
        ? { ...prevValue }
        : { prev: prevValue.now, now: prevValue.now + 1 }
    );
  }

  function handlePreviousQuestionsNumUpdate() {
    setQuestionNum((prevValue) =>
      prevValue.now - 1 <= 0
        ? { ...prevValue }
        : { prev: prevValue.now, now: prevValue.now - 1 }
    );
  }

  function handleNextClick() {
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowRight",
      })
    );
  }

  function handlePreviousClick() {
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowLeft",
      })
    );
  }

  const value = {
    questionNum,
    setQuestionNum,
    handleNextClick,
    handlePreviousClick,
    handleNextQuestionNumUpdate,
    handlePreviousQuestionsNumUpdate,
  };

  return (
    <SharedStatesContext.Provider value={value}>
      {children}
    </SharedStatesContext.Provider>
  );
}

export function useSharedStates(): SharedStatesContextType {
  const context = useContext(SharedStatesContext);

  if (context) {
    return context;
  }

  throw new Error("useSharedStates must be use inside SharedStatesProvider");
}
