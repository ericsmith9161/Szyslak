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

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const un = this.state.email.split("@")[0];
    this.setState({"username": un});
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      this.props.history.push('/channels/1')
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
      formTitle = "Sign up for Szyslak";
    } else {
      otherPath = '/signup';
      otherPathName = "create an account";
      pathName = "Sign In";
      formTitle = "Sign in to Szyslak";
    };
    return (
      <div className = "session-form">
        <SessionFormHeader login = {this.props.login}/>
        <ul className="session-form-errors-list">
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className = "session-form-body">
          <h3>{formTitle}</h3>
          <p>szyslak.herokuapp.com/</p>
          <p className="directions">Enter your <b>email address</b> and <b>password.</b></p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="email"
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
        </div>

      </div>
    
    )
  }
}

export default SessionForm;