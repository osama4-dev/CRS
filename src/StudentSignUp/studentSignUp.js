import React, { useEffect, useState } from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Button,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AuthMiddleWare from "../redux/authMiddleWare";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScaleLoader } from "react-spinners";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./studentSignUp.css";

const StudentSignUp = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [program, setProgram] = useState("");
  const [gender, setGender] = useState("");

  const override = `
    display: block;
    margin-left: 0px;
    border-color: red;
`;
console.log("props",props)

  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleProgram = (event) => {
    setProgram(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleConfirmPassowerd = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleSignUp = (event) => {
    event.preventDefault();

    props.SignUpDispatch({
      email: email,
      password: password,
    });
  };

  useEffect(() => {
    if (props.authReducer.isSucess) {
      props.history.push("/");
    }
  }, [props.authReducer, props.history]);

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== password) {
        return false;
      }
      return true;
    });
    return () => {
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, [password]);
  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.card}>
        <CardContent>
          <ToastContainer />
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Student Sign Up
            </Typography>
            <ValidatorForm onSubmit={handleSignUp} className={classes.form}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Name"
                onChange={handleName}
                name="Name"
                value={name}
                validators={["required"]}
                errorMessages={["this field is required", "Name is not valid"]}
                autoComplete="off"
              />
              <InputLabel id="demo-simple-select-label">
                Select Your Gender
              </InputLabel>
              <Select
                className="dropMeDown"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                onChange={handleGender}
                validators={["required"]}
                errorMessages={["this field is required"]}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Others</MenuItem>
              </Select>

              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Program"
                onChange={handleProgram}
                name="Program"
                value={program}
                validators={["required"]}
                errorMessages={[
                  "this field is required",
                  "Program is not valid",
                ]}
                autoComplete="off"
              />

              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                onChange={handleEmail}
                name="email"
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
                autoComplete="off"
              />
              <br />

              <TextValidator
                variant="outlined"
                fullWidth
                label="Password"
                onChange={handlePassword}
                name="password"
                type="password"
                value={password}
                validators={["required"]}
                errorMessages={["this field is required"]}
                autoComplete="off"
              />
              <br />
              <TextValidator
                variant="outlined"
                label="Confirm password"
                fullWidth
                onChange={handleConfirmPassowerd}
                name="confirmPassword"
                type="password"
                validators={["isPasswordMatch", "required"]}
                errorMessages={["password mismatch", "this field is required"]}
                value={confirmPassword}
                autoComplete="off"
              />
              {props.authReducer.isLoading ? (
                <ScaleLoader
                  css={override}
                  size={150}
                  color={"#eb4034"}
                  loading={props.authReducer.isLoading}
                />
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
              )}
            </ValidatorForm>
          </div>
        </CardContent>
      </Card>
    </Container>
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
    color: "red",
  },
}));

function mapDispatchToProps(dispatch) {
  return {
    SignUpDispatch: (data) => dispatch(AuthMiddleWare.signUp(data)),
  };
}
function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StudentSignUp));
