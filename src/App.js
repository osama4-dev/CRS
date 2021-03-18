import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/navbar";
// import { BrowserRouter, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Routes from "./Route/PublicRoute/Routes";

const App = () => {
  // const dispatch = useDispatch();
  // const currentType = useSelector((state) => state.authReducer.currnetuser?.uid);

  // const [Loading, setLoading] = useState(true);


//   useEffect(()=>{

// },[])


  return (
    <div className="App">
        <Navbar />
        <Routes />
        
    </div>
  );
}




export default App;

