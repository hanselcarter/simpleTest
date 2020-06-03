import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  startAddPatient,
  startSetPatients,
  startAddDrug,
  startSetDrugs,
} from "Actions/index";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AddDialog from "./AddDialog";
import ListText from "./List";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { patients, drugs } = useSelector((state) => ({
    patients: state.patientsReducer.patients,
    drugs: state.drugsReducer.drugs,
  }));

  const [openAddPatientDialog, setOpenAddPatientDialog] = React.useState(false);
  const [openAddDrugDialog, setOpenAddDrugDialog] = React.useState(false);

  React.useEffect(() => {
    fetchPatients();
    fetchDrugs();
  }, []);

  const fetchPatients = async () => {
    await dispatch(startSetPatients());
  };

  const fetchDrugs = async () => {
    await dispatch(startSetDrugs());
  };

  const handleClickAddPatientDialog = () => {
    setOpenAddPatientDialog(true);
  };

  const handleCloseAddPatientDialog = () => {
    setOpenAddPatientDialog(false);
  };

  const handleAddPatient = async ({ name, drugs }) => {
    await dispatch(startAddPatient({ name, drugs }));
    setOpenAddPatientDialog(false);
  };

  const handleClickAddDrugDialog = () => {
    setOpenAddDrugDialog(true);
  };

  const handleCloseAddDrugDialog = () => {
    setOpenAddDrugDialog(false);
  };

  const handleAddDrug = async ({ name }) => {
    await dispatch(startAddDrug({ name }));
    setOpenAddDrugDialog(false);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Simple App
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickAddPatientDialog}
          >
            Add Patient
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickAddDrugDialog}
          >
            Add Drug
          </Button>
        </Grid>
        <Grid item xs={6}>
          <ListText items={patients} header="Patients Lost" />
        </Grid>
        <Grid item xs={6}>
          <ListText items={drugs} header="Drug list" />
        </Grid>
      </Grid>
      <AddDialog
        key="patient"
        description="To add a patient, please enter the name of the patient"
        header="Add Patient"
        open={openAddPatientDialog}
        handleClose={handleCloseAddPatientDialog}
        handleAdd={handleAddPatient}
        enableAddDrugs={true}
      />
      <AddDialog
        key="drug"
        description="To add a drug, please enter the name of the drug"
        header="Add Drug"
        open={openAddDrugDialog}
        handleClose={handleCloseAddDrugDialog}
        handleAdd={handleAddDrug}
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
}));

export default App;
