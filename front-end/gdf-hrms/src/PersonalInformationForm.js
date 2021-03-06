import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SimpleSelect from './SimpleSelect';




const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        flexGrow: 1,
    }, 
  },
  
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function PersonalInformationForm() {
  const classes = useStyles();
  const SexOption = ["Male","Female"];
  function FormRow() {
    return (
      <React.Fragment>
        <div>
            <Grid item xs={2}>
            <TextField id="FirstName" label="First Name" variant="outlined" size="small" />
            <SimpleSelect option={SexOption} selectLabel="Sex" ></SimpleSelect>
           </Grid>
        </div>    
        <div>
            <Grid item xs={2}>
                <TextField id="LastName" label="Last Name" variant="outlined" size="small" />
                <SimpleSelect selectLabel="Race"></SimpleSelect>
            </Grid >
       </div> 
       <div>
       <Grid item xs={2}>
           <Grid item xs={2}>
              <TextField id="MiddleNameOne" label="Middle Name" variant="outlined" size="small" />
              <SimpleSelect selectLabel="Nationality"></SimpleSelect>
            </Grid>
        </Grid >
        </div>
        <div>
        <Grid item xs={2}>
            <TextField id="MiddleNameOne" label="Middle Name" variant="outlined" size="small" />
        </Grid >
        <SimpleSelect selectLabel="Religion"></SimpleSelect>
        </div>
        <div>
        <Grid item xs={2}>
             <TextField id="dateOfBirth" label="Date of Birth" variant="outlined" InputLabelProps={{ shrink: true,}} size="small" type="date" />
             <SimpleSelect selectLabel="Marital Status"></SimpleSelect>
        </Grid >
        </div>
      </React.Fragment>
      
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
      <h4>Personal Information </h4>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
