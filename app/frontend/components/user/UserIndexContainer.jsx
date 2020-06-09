import {connect} from 'react-redux';

import React from 'react';
import UserIndex from './UserIndex';

import {fetchUsers} from '../../actions/user_actions';

const mSTP = (state) => {
  return{
    users: Object.values(state.entities.users),
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mSTP, mDTP)(UserIndex);