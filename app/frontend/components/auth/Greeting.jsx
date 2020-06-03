import React from 'react';
import { Link } from 'react-router-dom';

import Splash from './Splash/Splash';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "greeting">
        <Splash />
        <Link to="/signup"> Sign Up</Link>
        <Link to="/login">Log In </Link>
      </div>
    );
  }
}

export default Greeting;