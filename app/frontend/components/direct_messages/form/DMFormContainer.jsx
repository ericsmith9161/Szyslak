import React from 'react';
import { connect } from 'react-redux';
import { createDirectMessage } from '../../../actions/direct_message_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../../actions/modal_actions';
import { fetchUsers, receiveUser} from '../../../actions/user_actions';

import { fetchUserDirectMessages } from '../../../actions/direct_message_actions';
import DMForm from './DMForm';

const mSTP = (state) => {
  return {
    currentUserId: state.session.id,
    users: Object.values(state.entities.users),
    directMessages: Object.values(state.entities.directMessages)
  }
}

const mDTP = (dispatch) => {
  return {
    createDirectMessage: (DM) => dispatch(createDirectMessage(DM)),
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers()),
    receiveUser: (user) => dispatch(receiveUser(user)),
    fetchUserDirectMessages: (userId) => dispatch(fetchUserDirectMessages(userId))
  }
}

export default withRouter(connect(mSTP, mDTP)(DMForm));