import { DB } from "./firebase";
import { ADD_DRUG, SET_DRUGS } from "./types";

export const setDrugs = (drugs = []) => ({
  type: SET_DRUGS,
  payload: {
    drugs,
  },
});

export const addDrug = (drug = {}) => ({
  type: ADD_DRUG,
  payload: {
    drug,
  },
});

export const startSetDrugs = () => {
  return async (dispatch) => {
    const drugs = [];

    const drugsSnapshot = await DB.ref("drugs").once("value");

    if (drugsSnapshot) {
      drugsSnapshot.forEach((drug) => {
        drugs.push({
          uid: drug.key,
          ...drug.val(),
        });
      });
    }

    return dispatch(setDrugs(drugs));
  };
};

export const startAddDrug = (drug) => {
  return async (dispatch) => {
    const snapshot = await DB.ref("drugs").push(drug);

    return dispatch(addDrug({ ...drug, uid: snapshot.key }));
  };
};
