
import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import {
  Container,
  CssBaseline,
  Typography,
  FormControlLabel,
  Button,
  Checkbox,
  Grid,
  Link,
  makeStyles,
  Card,
  CardContent,
  TextareaAutosize
} from "@material-ui/core";

import { ToastContainer,toast } from "react-toastify";
import { ScaleLoader } from "react-spinners";



import CrudServices from "../Services/CrudServices";
import './Portal.css'

const Portal = () => {
  const initialState = {
    title: "",
    description: "",
    published: false,
  };
  const classes = useStyles();

  const [crud, setCrud] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCrud({ ...crud, [name]: value });
  };

  const saveCrud = () => {
    var data = {
      title: crud.title,
      description: crud.description,
      published: false,
    };

    CrudServices.create(data)
      .then(() => {
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const newCrud = () => {
  //   setCrud(initialState);
  //   setSubmitted(false);
  // };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>

        </div>
      ) : (
        <div>
          <Typography component="h1" variant="h5">
              Portal
            </Typography>
          <ValidatorForm
              // onSubmit={handlerLogin}
              onError={(errors) => {
                for (const err of errors) {
                  console.log(err.props.errorMessages[0]);
                }
              }}
              className={classes.form}
            >

          <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="title"
                onChange={handleInputChange}
                name="title"
                value={crud.title}
                
                autoComplete="off"
              />
               
            <TextareaAutosize aria-label="minimum height" name="description" label="description" rowsMin={3} onChange={handleInputChange} value={crud.description} placeholder="Minimum 3 rows" />
            </ValidatorForm>

            <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  onClick={saveCrud}
                >
                  Submit
                </Button>
          
        </div>
      )}
    </div>
  );
  
};
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    background: "linear-gradient(45deg, #6495ED 30%, #00008B 90%)",
    margin: theme.spacing(3, 0, 2),
    color: "#fff",
  },
  card: {
    marginTop: "60px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
  },
  pointer: {
    cursor: "pointer",
    color: "#DC143C",
  },
}))

export default Portal;
