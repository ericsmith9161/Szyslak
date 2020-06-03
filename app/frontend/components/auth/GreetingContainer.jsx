import React from 'react';
import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions'
import Greeting from './Greeting';

const mSTP = state => (
  {
    currentUser: state.entities.users[state.session.id]
  }
)

const mDTP = dispatch => (
  {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
  }
)

export default connect(mSTP, mDTP)(Greeting);