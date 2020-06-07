import React from 'react';
import { connect } from 'react-redux';
import { fetchChannelMessages, receiveMessage } from '../../actions/message_actions';
import { fetchChannel } from '../../actions/channel_actions';
import {withRouter} from 'react-router-dom';

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
    receiveMessage: message => dispatch(receiveMessage(message))

  }
}

export default withRouter(connect(mSTP, mDTP)(MessageList));