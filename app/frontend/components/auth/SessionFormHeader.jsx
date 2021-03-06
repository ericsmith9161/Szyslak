import React from 'react';
import {Link} from 'react-router-dom';
import moeGo from 'images/moego.png'




class SessionFormHeader extends React.Component{
  constructor(props){
    super(props);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleDemoLogin(e){
    e.preventDefault();
    this.props.login({email: 'demo@demo.demo', username: 'Demo User', password: 'password'})
  }

  render(){
    return (
      <div className="session-form-header">
        <div className="session-form-header-logo">
          <Link to="/greeting"><img className="logo" src={window.moegoURL} width="30" /></Link>
          <span><Link to="/greeting"><img src={window.szyslakblackURL} height="30" /></Link></span>
        </div>
        <div className="session-form-header-links">
          <a className="normal-link" target="_blank" href="https://github.com/ericsmith9161">Github</a>
          <a className="normal-link" target="_blank" href="https://www.linkedin.com/in/eric-smith-8832b41aa/">LinkedIn</a>
          <a className="normal-link" target="_blank" href="https://www.facebook.com/profile.php?id=100047966766811">Facebook</a>
          <Link to="/" className="session-header-demo-login" onClick={this.handleDemoLogin}>Sign in as demo user</Link>
          {/* icon goes here */}
        </div>
      </div>
    )
  }

}

export default SessionFormHeader;
