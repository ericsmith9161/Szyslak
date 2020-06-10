import React from 'react';
import { connect } from 'react-redux';
import { fetchDirectMessageMessages, receiveMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';

import DMMessageList from './DMMessageList';

const mSTP = (state, ownProps) => {
  return {
    messages: Object.values(state.entities.messages),
    directMessageId: ownProps.match.params.directMessageId
  }
}

const mDTP = (dispatch) => {
  return {
    fetchDirectMessageMessages: (directMessageId) => dispatch(fetchDirectMessageMessages(directMessageId)),
    receiveMessage: message => dispatch(receiveMessage(message)),
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

export default withRouter(connect(mSTP, mDTP)(DMMessageList));