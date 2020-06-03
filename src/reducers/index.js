import { combineReducers } from "redux";
import patients from "./patients";

export default (state, action) => {
  const rootReducer = combineReducers({
    patientsReducer: patients,
  });

  return rootReducer(state, action);
};
