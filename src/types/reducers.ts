/**
 * states
 */

export type QuestionsStateType = {
  readonly name: string;
  readonly singleChoice: string;
  readonly multipleChoices: string[];
};

/**
 * actions
 */

export type QuestionsActionsType =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_SINGLE_CHOICE"; payload: string }
  | { type: "SET_MULTIPLE_CHOICES"; payload: string }
  | { type: "REMOVE_MULTIPLE_CHOICE"; payload: string };
