import { useEffect, useState } from 'react';
import './App.css';
import Navbar from  './navbar/navbar'
import { Route, Switch, Redirect } from "react-router-dom";
import studentSignUp from './studentSignUp/studentSignUp'
import login from './login/login'
import companySignUp from './companySignUp/compnaySignUp'
// import studentDashboard from './dashboard/studentDashboard/studentDashboard'
import companyDashboard from './dashboard/CompanyDashboard/companyDashboard'
import studentDashboard from './dashboard/StudentDashboard/studentDashboard'

function App() {
  const [user,setUser] = useState('');
 
  return (
    <div className="App">
      <Navbar/>
     
      <Switch>
        <Route exact path='/' component={login}/>
        <Route path='/studentSignUp' component={studentSignUp} />
        <Route path='/compnaySignUp' component={companySignUp} />
        <Route path='/companyDashboard' component={companyDashboard} />
        <Route path='/studentDashboard' component={studentDashboard} />

      </Switch>
    </div>
  );
}

export default App;
