import { Dispatch, SetStateAction } from "react";
import { QuestionsActionsType, QuestionsStateType } from "@/types";

/**
 * questions-context
 */

export type QuestionsContextType = {
  readonly state: QuestionsStateType;
  readonly dispatch: Dispatch<QuestionsActionsType>;
};

/**
 * shared-states-context
 */

export type QuestionNumType = { prev: null | number; now: number };

export type SharedStatesContextType = {
  readonly questionNum: QuestionNumType;
  readonly handleNextClick: () => void;
  readonly handlePreviousClick: () => void;
  readonly handleNextQuestionNumUpdate: () => void;
  readonly handlePreviousQuestionsNumUpdate: () => void;
  readonly setQuestionNum: Dispatch<SetStateAction<QuestionNumType>>;
};
