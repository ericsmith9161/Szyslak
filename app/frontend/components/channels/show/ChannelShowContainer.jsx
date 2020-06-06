import React from 'react';
import { connect } from 'react-redux';
import {fetchChannel, deleteChannel} from '../../../actions/channel_actions';

import ChannelShow from './ChannelShow';

const mSTP = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId]
  }
}

const mDTP = (dispatch) => {
  return {
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
  }
}

export default connect(mSTP, mDTP)(ChannelShow);