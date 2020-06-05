//only user? do i get channels from my user 
//or do i need to pull them in as well?
//fetchuser, user
import {connect} from 'react-redux';

import Sidebar from './Sidebar';

import {fetchUserChannels} from '../../actions/session_actions';
import {editUser, fetchUsers} from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';





const mSTP = (state) => {
  // console.log(Object.values(fetchUserChannels(state.session.id)));
  return {
    currentUser: state.entities.users[state.session.id],
    //channels: userChannels
  }
}

const mDTP = (dispatch) => {
  return {
    editUser: user => dispatch(editUser(user)),
    logout: () => dispatch(logout()),    
  }
}

export default connect(mSTP, mDTP)(Sidebar)