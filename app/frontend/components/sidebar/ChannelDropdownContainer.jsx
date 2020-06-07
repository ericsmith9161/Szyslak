//only user? do i get channels from my user 
//or do i need to pull them in as well?
//fetchuser, user
import { connect } from 'react-redux';
import React from 'react';

import ChannelDropdown from './ChannelDropdown';

import { fetchUserChannels, fetchChannels } from '../../actions/channel_actions';
import { editUser, fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';





const mSTP = (state) => {
  return {
    sessionid: state.session.id,
    user: state.entities.users[state.session.id],
    channels: Object.values(state.entities.channels)
  }
}

const mDTP = (dispatch) => {
  return {
    editUser: user => dispatch(editUser(user)),
    logout: () => dispatch(logout()),
    createChannel: (
      <button className="channel-dropdown-plus-btn" onClick={() => dispatch(openModal('channelplusbutton'))}>
        +
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    fetchUserChannels: (user) => dispatch(fetchUserChannels(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),

  }
}

export default connect(mSTP, mDTP)(ChannelDropdown)