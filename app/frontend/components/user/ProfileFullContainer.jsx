import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import React from 'react';

import ProfileFull from './ProfileFull';
import {fetchUser} from '../../actions/user_actions';

const mSTP = (state) =>{
  return{
    currentUserId: state.session.id,
  }
}

const mDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  }
}

export default withRouter(connect(mSTP, mDTP)(ProfileFull));
