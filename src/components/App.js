import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import { startSetReminders } from "Actions/index";
// import { useDispatch, useSelector } from "calendarReduxHooks";
// import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import AddDialog from "./AddDialog";

const App = () => {
  const classes = useStyles();

  const [openAddPatientDialog, setOpenAddPatientDialog] = React.useState(false);
  const [openAddDrugDialog, setOpenAddDrugDialog] = React.useState(false);

  const handleClickAddPatientDialog = () => {
    setOpenAddPatientDialog(true);
  };

  const handleCloseAddPatientDialog = () => {
    setOpenAddPatientDialog(false);
  };

  const handleAddPatient = (name) => {
    console.log(name, "patient name");
    setOpenAddPatientDialog(false);
  };

  const handleClickAddDrugDialog = () => {
    setOpenAddDrugDialog(true);
  };

  const handleCloseAddDrugDialog = () => {
    setOpenAddDrugDialog(false);
  };

  const handleAddDrug = (name) => {
    console.log(name, "patient name");
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
      </Grid>
      <AddDialog
        key="patient"
        description="To add a patient, please enter the name of the patient"
        header="Add Patient"
        open={openAddPatientDialog}
        handleClose={handleCloseAddPatientDialog}
        handleAddPatient={handleAddPatient}
      />
      <AddDialog
        key="drug"
        description="To add a drug, please enter the name of the drug"
        header="Add Drug"
        open={openAddDrugDialog}
        handleClose={handleCloseAddDrugDialog}
        handleAddPatient={handleAddDrug}
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
