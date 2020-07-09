import React from 'react';
import { connect } from 'react-redux';
import {  editMessage, deleteMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';

import MessageShow from './MessageShow';

const mSTP = (state) => {
  return {
    currentUserID: state.session.id
  }
}

const mDTP = (dispatch) => {
  return {
    editMessage: (message) => dispatch(editMessage(message)),
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId))
  }
}

export default withRouter(connect(mSTP, mDTP)(MessageShow));