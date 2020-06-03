import { DB } from "./firebase";
import { ADD_PATIENT, SET_PATIENTS } from "./types";

export const setPatients = (patients = []) => ({
  type: SET_PATIENTS,
  payload: {
    patients,
  },
});

export const addPatient = (patient = {}) => ({
  type: ADD_PATIENT,
  payload: {
    patient,
  },
});

export const startSetPatients = () => {
  return async (dispatch) => {
    const patients = [];

    const patientsSnapshot = await DB.ref("patients").once("value");

    if (patientsSnapshot) {
      patientsSnapshot.forEach((patient) => {
        patients.push({
          uid: patient.key,
          ...patient.val(),
        });
      });
    }

    return dispatch(setPatients(patients));
  };
};

export const startAddPatient = (patient) => {
  return async (dispatch) => {
    const snapshot = await DB.ref("patients").push(patient);

    return dispatch(addPatient({ ...patient, uid: snapshot.key }));
  };
};
