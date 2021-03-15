import { useState } from "react";
import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter, withRouter } from "react-router-dom";

import Routes from "./Route/PublicRoute/Routes";

function App() {
  // const [Loading, setLoading] = useState(true);


//   useEffect(()=>{

// },[])


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}




export default App;

