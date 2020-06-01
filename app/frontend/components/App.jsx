import React from "react";

import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";

import {Route} from "react-router-dom";
import { AuthRoute } from "../util/route_util";


const App = () => (
  <div>
  <header>
      <h1>Szyslak</h1>
      <GreetingContainer />
    </header>
    
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;