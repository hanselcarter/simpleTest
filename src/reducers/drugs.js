import { ADD_DRUG, UPDATE_DRUG, SET_DRUGS } from "Actions/types";

const INITIAL_STATE = {
  drugs: [],
  isLoading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DRUGS:
      return {
        ...state,
        drugs: action.payload.drugs,
        isLoading: false,
      };
    case ADD_DRUG:
      return {
        ...state,
        drugs: [...state.drugs, action.payload.drug],
      };
    case UPDATE_DRUG:
      return {
        ...state,
        drugs: [
          ...state.drugs.slice(0, action.payload.index),
          action.payload.drug,
          ...state.drugs.slice(action.payload.index + 1),
        ],
      };
    default:
      return state;
  }
};
