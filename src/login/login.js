import React, { useState, useEffect } from "react";
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
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ToastContainer } from "react-toastify";
import { ScaleLoader } from "react-spinners";
import { connect } from "react-redux";
import AuthMiddleWare from "../redux/authMiddleWare";

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const override = `
    display: block;
    margin-left: 0px;
    border-color: red;
`;

  // console.log("data",props)

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleCheck = (event) => {
    setRememberMe(event.target.checked);
  };
  const handlerLogin = (event) => {
    event.preventDefault();

    setLoading(true);
    props.LoginDispatch({
      email: email,
      password: password,
    });
  };

  useEffect(() => {
    
    
    if (props.authReducer.isLoginSucess) {
      
      setLoading(false);
      props.history.push("/CompanyDashboard");
      props.ResetDispatch();
    }
  }, [props.authReducer.isLoginSucess, props.history]);

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.card}>
        <CardContent>
          <ToastContainer />
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <ValidatorForm
              onSubmit={handlerLogin}
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
                label="Email"
                onChange={handleEmail}
                name="email"
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
                autoComplete="off"
              />
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
              <FormControlLabel
                control={
                  <Checkbox
                    value={rememberme}
                    onChange={(e) => handleCheck(e)}
                    color="primary"
                  />
                }
                label="Remember me"
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
                  Log In
                </Button>
              )}

              <Grid container>
                <Grid item>
                  <Link
                    href="/studentSignUp"
                    className={classes.pointer}
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
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
    color: "#DC143C",
  },
}));

function mapDispatchToProps(dispatch) {
  return {
    LoginDispatch: (data) => dispatch(AuthMiddleWare.login(data)),
    ResetDispatch: () => dispatch(AuthMiddleWare.reset()),
  };
}
function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
