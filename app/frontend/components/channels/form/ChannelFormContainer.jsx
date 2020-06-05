import React from 'react';
import { connect } from 'react-redux';
import { createChannel } from '../../../actions/channel_actions'
import {withRouter} from 'react-router-dom'

import ChannelForm from './ChannelForm';

const mSTP = (state) => {
  return {
    channel: {name: "", details: "", private: false}
  }
}

const mDTP = (dispatch) => {
  return {
    processForm: (channel) => dispatch(createChannel(channel))
  }
}

export default withRouter(connect(mSTP, mDTP)(ChannelForm));