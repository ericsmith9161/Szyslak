import React from "react";

import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";

import {Route} from "react-router-dom";

const App = () => (
  <div>
    <h1>Szyslak</h1>
    <GreetingContainer />
  </div>
  <Route exact path="/login" component={LoginFormContainer} />
  <Route exact path="/signup" component={SignupFormContainer} />
);

export default App;