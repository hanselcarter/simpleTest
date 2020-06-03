import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import AddDrugToPatientList from "./AddDrugToPatientList";

const AddDialog = ({
  open,
  handleClose,
  handleAdd,
  description,
  header,
  enableAddDrugs = false,
}) => {
  const [name, setName] = React.useState("");
  const [drugs, setDrugs] = React.useState([]);

  const onChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(drugs, "drugs");
  };

  const addDrug = (drugId) => {
    setDrugs([...drugs, drugId]);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{header}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            fullWidth
            onChange={onChangeName}
          />
          {enableAddDrugs && <AddDrugToPatientList addDrug={addDrug} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() =>
              handleAdd({
                name: name,
                drugs: enableAddDrugs ? drugs : null,
              })
            }
            color="primary"
            disabled={!name}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddDialog;
