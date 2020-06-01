import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
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
          <label> username
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}
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