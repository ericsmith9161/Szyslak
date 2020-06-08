//only user? do i get channels from my user 
//or do i need to pull them in as well?
//fetchuser, user
import { connect } from 'react-redux';
import React from 'react';

import ChannelTopic from './ChannelTopic';
import {withRouter} from 'react-router-dom';

import { fetchChannel } from '../../../../actions/channel_actions';
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

  }
}

export default withRouter(connect(mSTP, mDTP)(ChannelTopic));