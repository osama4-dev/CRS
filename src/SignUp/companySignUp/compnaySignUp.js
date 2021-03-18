import React, {  useState,useEffect } from "react";
// import { connect } from "react-redux";
// import AuthMiddleWare from "../redux/authMiddleWare";
// import { withRouter } from "react-router-dom";
import { auth, firestore } from "../../firebase/db";

import {
  Container,
  CssBaseline,
  Typography,
  Button,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";

// import {LockRounded} from '@material-ui/icons';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScaleLoader } from "react-spinners";

function CompanySignUp  (props) {
  const classes = useStyles();
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const override = `
    display: block;
    margin-left: 0px;
    border-color: red;
`;
  const handleFullName = (event) => {
    setFullName(event.target.value);
  };
  const handleCompanyName = (event) => {
    setCompanyName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassowerd = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignUp = async (event) => {
    

    event.preventDefault();
    try {
      setLoading(true);
       
      const res = await auth.createUserWithEmailAndPassword(email, password);
      firestore.collection("users").doc(res.user.uid).set({
        fullName,
        email,
        companyName,
        // companyName,
        // industry,
        // email,
        
        role: "Company",
        uid: res.user.uid,
      });
      setLoading(false);
  
      props.history.push("/");
    } catch (error) {
      setLoading(false)
      toast.error(error.message);
    }
    // props.SignUpDispatch({
    //   email: email,
    //   password: password,
    // });
    // setLoading(false);

  };

  // useEffect(() => {
  //   if (props.authReducer.isSucess) {
  //     props.history.push("/");
  //     props.ResetDispatch();
  //   }
  // }, [props.authReducer.isSucess, props.history]);

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
              Company Sign Up
            </Typography>
            <ValidatorForm onSubmit={handleSignUp} className={classes.form}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Full Name"
                onChange={handleFullName}
                name="Full Name"
                value={fullName}
                validators={["required"]}
                errorMessages={["this field is required", "name is not valid"]}
                autoComplete="off"
              />
               <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Company Name"
                onChange={handleCompanyName}
                name="companyName"
                value={companyName}
                validators={["required"]}
                errorMessages={["this field is required", "name is not valid"]}
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
              {loading ? (
                <ScaleLoader
                  css={override}
                  size={150}
                  color={"#eb4034"}
                  loading={loading}
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
    width: "100%", // Fix IE 11 issue.
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

// function mapDispatchToProps(dispatch) {
//   return {
//     SignUpDispatch: (data) => dispatch(AuthMiddleWare.signUp(data)),
//     ResetDispatch: () => dispatch(AuthMiddleWare.reset()),
//   };
// }
// function mapStateToProps(state) {
//   return {
//     authReducer: state.authReducer,
//   };
// }

export default CompanySignUp;
