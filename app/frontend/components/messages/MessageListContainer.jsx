import React from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/message_actions'
import { fetchChannel } from '../../actions/channel_actions'

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
  }
}

export default connect(mSTP, mDTP)(MessageList);