import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      //this will become switch 
      return (
        <div>
          <h1>Welcome {this.props.currentUser.username}!</h1>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      )
    } else {
      return (
        //this will become Splash component
        <div>
          <Link to="/signup"> Sign Up</Link>
          <Link to="/login">Log In </Link>
        </div>
      );
    }
  }
}

export default Greeting;