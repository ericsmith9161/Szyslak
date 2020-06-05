import React from 'react';
import {Link} from 'react-router-dom';

class SplashTopSectionLeft extends React.Component{
  constructor(props){
    super(props);
    this.handleDemoUser = this.handleDemoUser.bind(this)
  }

  handleDemoUser(e){
    e.preventDefault();
    this.props.login({ username: "demo user", email: "demo@demo.demo", password: "password" })
  }

  render(){
    return (
      <div className = "splash-top-section-left">
        <h6>WORK FROM HOME</h6>
        <h1>Szylack brings the team together, wherever you are</h1>
        <p className = "splash-top-section-left-body">
          With all of your communications and tools in one place,
          remote teams will stay productive no matter where you're
          working from.
        </p>
        <div className="button-flex-splash">
          <Link to="/login"><button className="button-color-one">TRY SZYLACK FOR FREE</button></Link>
          <a href="https://github.com/ericsmith9161" target="_blank"><button className="button-color-two">LEARN MORE</button></a>
        </div>
        <p className="get-started">Want to give it a try? <button onClick={this.handleDemoUser}>Login as a demo user</button></p>
      </div>
    )
  }
}

export default SplashTopSectionLeft;