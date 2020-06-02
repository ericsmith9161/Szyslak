import React from "react";

import LoginFormContainer from "./auth/LoginFormContainer";
import SignupFormContainer from "./auth/SignupFormContainer";
import GreetingContainer from "./auth/GreetingContainer"

import {Route} from "react-router-dom";
import { AuthRoute } from "../util/route_util";


const App = () => (
  <div>
  <header>
      <h1>Szyslak</h1>
      <AuthRoute exact path="/" component={GreetingContainer} />
    </header>
    
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;