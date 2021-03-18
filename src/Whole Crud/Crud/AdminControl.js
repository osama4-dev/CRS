import React, { useState } from "react";
import AdminControlDataService from "../Services/CrudServices";

import {
  Container,
  CssBaseline,
  Typography,
  Button,
  makeStyles,
  TextareaAutosize,
  Card,
  CardContent,
} from "@material-ui/core";
import "./AdminControl.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScaleLoader } from "react-spinners";

const AdminControl = (props) => {
  const initialAdminControlState = {
    key: null,
    title: "",
    description: "",
    published: false,
  };
  const classes = useStyles();

  const [currentAdminControl, setCurrentAdminControl] = useState(
    initialAdminControlState
  );
  const [message, setMessage] = useState("");

  const { AdminControl } = props;
  if (currentAdminControl.id !== AdminControl.id) {
    setCurrentAdminControl(AdminControl);
    setMessage("");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentAdminControl({ ...currentAdminControl, [name]: value });
  };

  const updatePublished = (status) => {
    AdminControlDataService.update(currentAdminControl.id, {
      published: status,
    })
      .then(() => {
        setCurrentAdminControl({ ...currentAdminControl, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateAdminControl = () => {
    const data = {
      title: currentAdminControl.title,
      description: currentAdminControl.description,
    };

    AdminControlDataService.update(currentAdminControl.id, data)
      .then(() => {
        setMessage("The AdminControl was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteAdminControl = () => {
    AdminControlDataService.remove(currentAdminControl.id)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentAdminControl ? (
        <div className="edit-form">
          <Typography component="h1" variant="h5">
            Admin Controls
          </Typography>

          <ValidatorForm className={classes.form}>
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              label="title"
              onChange={handleInputChange}
              name="title"
              value={currentAdminControl.title}
              // validators={["required"]}
              // errorMessages={["this field is required", "name is not valid"]}
              autoComplete="off"
            />
            <TextareaAutosize
              aria-label="minimum height"
              name="description"
              label="description"
              rowsMin={3}
              onChange={handleInputChange}
              value={currentAdminControl.description}
              placeholder="Minimum 3 rows"
            />
            <div className="form-group">
              <Typography component="h4" variant="h4">
                Status:
              </Typography>
              {currentAdminControl.published ? "Published" : "Pending..."}
            </div>
          </ValidatorForm>
        
          {currentAdminControl.published ? (
           
            <Button
              type="submit"
              fullWidth
              onClick={() => updatePublished(false)}
              variant="contained"
              className={classes.submit}
            >
              UnPublish
            </Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              onClick={() => updatePublished(true)}
              variant="contained"
              className={classes.submit}
            >
              Publish
            </Button>
          )}

          <Button
            type="submit"
            fullWidth
            onClick={deleteAdminControl}
            variant="contained"
            className={classes.submit}
          >
            Delete
          </Button>

          <Button
            type="submit"
            fullWidth
            onClick={updateAdminControl}
            variant="contained"
            className={classes.submit}
          >
            Update
          </Button>
          <p className="status-updated">{message}</p>
        </div>
      ) : (
        <></>
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

export default AdminControl;
