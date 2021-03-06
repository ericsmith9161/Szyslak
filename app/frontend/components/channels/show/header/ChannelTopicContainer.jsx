import { connect } from 'react-redux';
import React from 'react';

import ChannelTopic from './ChannelTopic';
import {withRouter} from 'react-router-dom';

import { fetchChannel, editChannel } from '../../../../actions/channel_actions';
import { openModal, closeModal } from '../../../../actions/modal_actions';





const mSTP = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    channel: state.entities.channels[ownProps.location.pathname.split("/")[2]],
    topic: "Set a topic for this channel"
  }
}

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    editChannel: (channel) => dispatch(editChannel(channel))
  }
}

export default withRouter(connect(mSTP, mDTP)(ChannelTopic));