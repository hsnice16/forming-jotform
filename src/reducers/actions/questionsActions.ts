export const SET_NAME = "SET_NAME";
export const SET_SINGLE_CHOICE = "SET_SINGLE_CHOICE";
export const SET_MULTIPLE_CHOICES = "SET_MULTIPLE_CHOICES";
export const REMOVE_MULTIPLE_CHOICE = "REMOVE_MULTIPLE_CHOICE";

export type QuestionsActionsType =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_SINGLE_CHOICE"; payload: string }
  | { type: "SET_MULTIPLE_CHOICES"; payload: string }
  | { type: "REMOVE_MULTIPLE_CHOICE"; payload: string };
