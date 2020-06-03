import { combineReducers } from "redux";
import patients from "./patients";
import drugs from "./drugs";

export default (state, action) => {
  const rootReducer = combineReducers({
    patientsReducer: patients,
    drugsReducer: drugs,
  });

  return rootReducer(state, action);
};
