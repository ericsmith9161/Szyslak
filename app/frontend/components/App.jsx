import React from "react";

import LoginFormContainer from "./auth/LoginFormContainer";
import SignupFormContainer from "./auth/SignupFormContainer";
import GreetingContainer from "./auth/GreetingContainer";
import Modal from "./Modal"

import SidebarContainer from "./sidebar/SidebarContainer";

import ChannelFormContainer from "./channels/form/ChannelFormContainer";
import ChannelShowContainer from "./channels/show/ChannelShowContainer";

import UserIndexContainer from './user/UserIndexContainer';

import {Route} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ChannelIndexContainer from "./channels/ChannelIndexContainer";



const App = () => (
  <div className="app">
      <AuthRoute exact path="/greeting" component={GreetingContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/channels" component={ChannelIndexContainer} />
      <ProtectedRoute exact path="/channels/new" component={ChannelFormContainer} />
      <Route path="/" component={Modal} />
      <ProtectedRoute path="/" component={SidebarContainer} />

      <ProtectedRoute path="/channels/:channelId" component={ChannelShowContainer} />
      <ProtectedRoute path="/users" component={UserIndexContainer} />
  </div>
);

export default App;

//how to structure routes?