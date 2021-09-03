import React from 'react';
import "./App.css";
import Designationpg from "./Designationpg/Designationpg";
import Formpage from "./Mainform/Formpage";
import Grouppg from "./Grouppg/Grouppg";
import Home from "./Home/Home";
import Editemp from './Editemp/Editemp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DeleteEmployee from './DeleteEmployee/DeleteEmployee';
import Drds from './Leftmenu/DRDS/Drds';
import Drtc from './Leftmenu/DRTC/Drtc';
import Aao from './Leftmenu/AAO/Aao';
import Aas from './Leftmenu/AAS/Aas';


const App = () => {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/designdata">
            <Designationpg />
          </Route>
          <Route path="/homedata">
            <Home />
          </Route>
          <Route path="/groupdata">
            <Grouppg />
          </Route>
          <Route path="/editemp">
            <Editemp />
          </Route>
          <Route path="/deleteemp">
            <DeleteEmployee />
          </Route>
          <Route path="/l-drds">
            <Drds />
          </Route>
          <Route path="/l-drtc">
            <Drtc />
          </Route>
          <Route path="/l-aao">
            <Aao />
          </Route>
          <Route path="/l-aas">
            <Aas />
          </Route>
          <Route path="/">
            <Formpage />
          </Route>
        </Switch>
      </Router>

    </>

  )
}

export default App;
