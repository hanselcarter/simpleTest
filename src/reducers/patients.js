import { ADD_PATIENT, UPDATE_PATIENT, SET_PATIENTS } from "Actions/types";

const INITIAL_STATE = {
  patients: [],
  isLoading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PATIENTS:
      return {
        ...state,
        patients: action.payload.patients,
        isLoading: false,
      };
    case ADD_PATIENT:
      return {
        ...state,
        patients: [...state.patients, action.payload.patient],
      };
    case UPDATE_PATIENT:
      return {
        ...state,
        patients: [
          ...state.patients.slice(0, action.payload.index),
          action.payload.patient,
          ...state.patients.slice(action.payload.index + 1),
        ],
      };
    default:
      return state;
  }
};
