import {
  SET_NAME,
  SET_SINGLE_CHOICE,
  QuestionsStateType,
  QuestionsActionsType,
  SET_MULTIPLE_CHOICES,
  REMOVE_MULTIPLE_CHOICE,
} from "../index";

export function questionsReducerFunc(
  state: QuestionsStateType,
  action: QuestionsActionsType
): QuestionsStateType {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };

    case SET_SINGLE_CHOICE:
      return { ...state, singleChoice: action.payload };

    case SET_MULTIPLE_CHOICES:
      return {
        ...state,
        multipleChoices: [...state.multipleChoices, action.payload],
      };

    case REMOVE_MULTIPLE_CHOICE:
      return {
        ...state,
        multipleChoices: state.multipleChoices.filter(
          (choice) => choice !== action.payload
        ),
      };

    default:
      return state;
  }
}
