import React from "react";

import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";

import {Route} from "react-router-dom";

const App = () => (
  <div>
  <header>
      <h1>Szyslak</h1>
      <GreetingContainer />
    </header>
    
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;