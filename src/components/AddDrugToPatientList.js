import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";

const AddDrugToPatientList = ({ addDrug }) => {
  const classes = useStyles();
  const { drugs } = useSelector((state) => ({
    drugs: state.drugsReducer.drugs,
  }));

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography>
            Click the add icon to add drug to this patient
          </Typography>
          <div className={classes.demo}>
            <List>
              {drugs.map((drug) => (
                <ListItem key={drug.uid}>
                  <IconButton
                    aria-label="delete"
                    onClick={() => addDrug(drug.uid)}
                  >
                    {drug.name}
                    <AddIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
}));

export default AddDrugToPatientList;
