import React from 'react';
import { connect } from 'react-redux';
import { fetchChannelMessages, receiveMessage } from '../../actions/message_actions';
import { fetchChannel } from '../../actions/channel_actions';
import {withRouter} from 'react-router-dom';
import {fetchUser} from '../../actions/user_actions';

import MessageList from './MessageList';

const mSTP = (state, ownProps) => {
  return {
    messages: Object.values(state.entities.messages),
    channelId: ownProps.match.params.channelId
  }
}

const mDTP = (dispatch) => {
  return {
    fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
    receiveMessage: message => dispatch(receiveMessage(message)),
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

export default withRouter(connect(mSTP, mDTP)(MessageList));