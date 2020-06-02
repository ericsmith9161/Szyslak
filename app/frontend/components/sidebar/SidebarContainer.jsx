//only user? do i get channels from my user 
//or do i need to pull them in as well?
//fetchuser, user
import {connect} from 'react-redux';

import Sidebar from './Sidebar';

import updateUser from '../../actions/user_actions'




const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],

  }
}

const mDTP = (dispatch) => {
  return {
    updateUser: user => dispatch(updateUser(user))
  }
}

export default connect(mSTP, mDTP)(Sidebar)