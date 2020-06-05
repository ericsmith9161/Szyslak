import React from 'react';
import { connect } from 'react-redux';
import {fetchChannel} from '../../../actions/channel_actions';

import ChannelShow from './ChannelShow';

const mSTP = (state, ownProps) => {

  console.log(state.entities.channels[ownProps.match.params.channelId])
  return {
    channel: state.entities.channels[ownProps.match.params.channelId]
  }
}

const mDTP = (dispatch) => {
  return {
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
  }
}

export default connect(mSTP, mDTP)(ChannelShow);