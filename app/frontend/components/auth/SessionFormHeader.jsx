import React from 'react';
import {Link} from 'react-router-dom';



class SessionFormHeader extends React.Component{
  constructor(props){
    super(props);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleDemoLogin(e){
    e.preventDefault();
    this.props.processForm({username: "demo user", email: "demo@demo.demo", password: "password"});
  }

  render(){
    return (
      <div className="session-form-header">
        <div>
          {/* logo here */}
        </div>
        <div className="session-form-header-links">
          <a href="https://github.com/ericsmith9161">Github</a>
          <a href="https://www.linkedin.com/in/eric-smith-8832b41aa/">LinkedIn</a>
          <a href="https://www.facebook.com/profile.php?id=100047966766811">Facebook</a>
          <Link to="/" onClick={this.handleDemoLogin}>Sign in as demo user</Link>
          {/* icon goes here */}
        </div>
      </div>
    )
  }

}

export default SessionFormHeader;

//logo???

//demo user use onclick?
