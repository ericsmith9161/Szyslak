import React from "react";

import LoginFormContainer from "./auth/LoginFormContainer";
import SignupFormContainer from "./auth/SignupFormContainer";
import GreetingContainer from "./auth/GreetingContainer"

import {Route} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SidebarContainer from "./sidebar/SidebarContainer";


const App = () => (
  <div>
    <header>
        <h1>Szyslak</h1>
    </header>
      <AuthRoute exact path="/greeting" component={GreetingContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path = "/" component={SidebarContainer} />
  </div>
);

export default App;