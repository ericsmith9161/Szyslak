import { connect } from 'react-redux';
import React from 'react';

import DMDropdown from './DMDropdown';

import { fetchUserDirectMessages } from '../../actions/direct_message_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  return {
    sessionid: state.session.id,
    user: state.entities.users[state.session.id],
    directMessages: Object.values(state.entities.directMessages)
  }
}

const mDTP = (dispatch) => {
  return {
    createDirectMessage: (
      <button className="dm-dropdown-plus-btn" onClick={() => dispatch(openModal('directmessageplusbutton'))}>
        +
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    fetchUserDirectMessages: (user) => dispatch(fetchUserDirectMessages(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),

  }
}

export default connect(mSTP, mDTP)(DMDropdown)