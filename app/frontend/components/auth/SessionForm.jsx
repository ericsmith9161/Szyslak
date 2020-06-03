import React from 'react';
import { Link } from 'react-router-dom';

import SessionFormHeader from './SessionFormHeader';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const un = this.state.email.split("@")[0];
    this.setState({"username": un});
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      this.props.history.push('/')
    });

  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }

  render() {
    let otherPath, otherPathName, pathName, formTitle
    if (this.props.formType === 'signup') {
      otherPath = '/login';
      otherPathName = "login to an existing account";
      pathName = "Create Account";
      formTitle = "Sign up for Szylack";
    } else {
      otherPath = '/signup';
      otherPathName = "create an account";
      pathName = "Sign In";
      formTitle = "Sign in to Szylack";
    };
    return (
      <div className = "session-form">
        <SessionFormHeader processForm = {this.props.processForm}/>
        <div className = "session-form-body">
            <h3>{formTitle}</h3>
            <p>szyslak.herokuapp.com/</p>
          <p className="directions">Enter your <b>email address</b> and <b>password.</b></p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange('email')}
                placeholder="you@example.com"
              />
            </label>
            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                placeholder="password"
              />
            </label>
            <button>{pathName}</button>
          </form>
          <Link to={otherPath}>{otherPathName}</Link>
          <ul>
            {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
        </div>
      </div>
    
    )
  }
}

export default SessionForm;