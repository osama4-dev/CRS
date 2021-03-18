import React, { useState /*, useEffect */ } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import CrudServices from "../Services/CrudServices";
import AdminControl from "./AdminControl";
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
import { List,ListItemText,ListItem } from '@material-ui/core';



const AdminControlsList = () => {
  const [currentAdminControl, setCurrentAdminControl] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  // const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [AdminControls, loading, error] = useCollection(CrudServices.getAll().orderBy("title", "asc"));

  

  const refreshList = () => {
    setCurrentAdminControl(null);
    setCurrentIndex(-1);
  };

  const setActiveAdminControl = (AdminControl, index) => {
    const { title, description, published } = AdminControl.data();

    setCurrentAdminControl({
      id: AdminControl.id,
      title,
      description,
      published,
    });

    setCurrentIndex(index);
  };
  function generate(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  return (
    <div className="list row">
      <div className="col-md-6">
      <Typography component="h1" variant="h5">
            User Data
          </Typography>

        {error && <strong>Error: {error}</strong>}
        {loading && <span>Loading...</span>}
        <ul className="list-group">
          { !loading &&
            AdminControls &&
            AdminControls.docs.map((AdminControl, index) => ( 
              // <li
              //   className={"list-group-item " + (index === currentIndex ? "active" : "")}
              //   onClick={() => setActiveAdminControl(AdminControl, index)}
              //   key={AdminControl.id}
              // >
              //   { AdminControl.data().title }
              // </li>


<List dense={dense}>
{generate(
  <ListItem>
    <ListItemText
    className={"list-group-item " + (index === currentIndex ? "active" : "")}
    onClick={() => setActiveAdminControl(AdminControl, index)}
    key={AdminControl.id}

      primary="User Data:"
      secondary={secondary ? 'Secondary text' : null}
    />
                    { AdminControl.data().title }

  </ListItem>,
)}
</List>



            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentAdminControl ? (
          <AdminControl AdminControl={currentAdminControl} refreshList={refreshList} />
        ) : (
          <div>
            <br />
            
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminControlsList;