
import { connect } from 'react-redux';
import React from 'react';

import UserInfoDropdown from './UserInfoDropdown';

import { fetchUserChannels } from '../../actions/channel_actions';
import { editUser, fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';





const mSTP = (state) => {
  return {
    user: state.entities.users[state.session.id],
    channels: Object.values(state.entities.channels)
  }
}

const mDTP = (dispatch) => {
  return {
    editUser: user => dispatch(editUser(user)),
    logout: () => dispatch(logout()),
    userInfoDropdown: (
      <button onClick={() => dispatch(openModal('userinfodropdown'))}>
        Szyslak
      </button>
    ),
    changeAvatar: (
      <button onClick={() => {
        closeModal()
        dispatch(openModal('addavatar'))
      }}>
        Add an avatar
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    fetchUserChannels: (user) => dispatch(fetchUserChannels(user)),

  }
}

export default connect(mSTP, mDTP)(UserInfoDropdown)