import React from 'react';
import { Link } from 'react-router-dom'

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
    let otherPath, otherPathName
    if (this.props.formType === 'signup') {
      otherPath = '/login'
      otherPathName = "Login"
    } else {
      otherPath = '/signup'
      otherPathName = "Signup"
    };
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> email
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </label>
          <label> password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </label>
          <button>submit</button>
        </form>
        <Link to={otherPath}>{otherPathName}</Link>
        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
    )
  }
}

export default SessionForm;