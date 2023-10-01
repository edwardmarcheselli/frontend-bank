import './App.css';
import React from 'react';
import NavBar from "./components/navbar";
import Home from "./pages/home";
import CreateAccount from "./pages/createaccount";
import Deposit from "./pages/deposit";
import Withdraw from "./pages/withdraw";
// import Balance from "./pages/balance";
import AllData from "./pages/alldata";
import {Routes, Route, HashRouter} from "react-router-dom";

import UserContext  from "./context/usercontext";
import SubmissionContext from "./context/submissioncontext";

function App() {
  return (
      <HashRouter>
        <NavBar/>
        <UserContext.Provider value={{users:[{name:'Ed',email:'Ed@mit.edu',password:'secret',balance:100}]}}>
        <SubmissionContext.Provider value={{transactions:[{name: 'Ed',email: 'Ed@mit.edu', type: "Initial Deposit", delta: 100}]}}>
          <div className="container d-flex justify-content-center" style={{padding: "20px"}}>
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/CreateAccount/" element={<CreateAccount/>} />
              <Route path="/deposit/" element={<Deposit/>} />
              <Route path="/withdraw/" element={<Withdraw/>} />
              {/* <Route path="/balance/" element={<Balance/>} /> */}
              <Route path="/alldata/" element={<AllData/>} />
            </Routes>
          </div>
        </SubmissionContext.Provider> 
        </UserContext.Provider>      
      </HashRouter>
  );
}

export default App;
