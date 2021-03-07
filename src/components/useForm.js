import React, { useState,useEffect} from 'react'

import { makeStyles } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";





 function Form(props) {
    const classes = useStyles();
    return (
        <ValidatorForm  onSubmit={props.onSubmit} className={classes.form}>
            {props.children}
        </ValidatorForm>
    )
}

const useStyles = makeStyles((theme) => ({
  
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
   
  }));
export default Form