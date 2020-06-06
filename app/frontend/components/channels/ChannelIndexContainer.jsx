import React from 'react';
import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions'

import ChannelIndex from './ChannelIndex';

const mSTP = (state) => {
  return{
    channels: Object.values(state.entities.channels)
  }
}

const mDTP = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
  }
}

export default connect(mSTP, mDTP)(ChannelIndex);