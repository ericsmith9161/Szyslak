import React from 'react';
import { connect } from 'react-redux';
import {fetchChannel, deleteChannel} from '../../../actions/channel_actions';

import ChannelShow from './ChannelShow';
import {withRouter} from 'react-router-dom';
import { openModal, closeModal } from '../../../actions/modal_actions';


const mSTP = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    messages: Object.values(state.entities.messages),
    channelId: ownProps.match.params.channelId,
    message: { body: "", user_id: state.session.id, messageable_type: 'Channel', messageable_id: ownProps.match.params.channelId },

  }
}

const mDTP = (dispatch) => {
  return {
    openChannelTopic: () => dispatch(openModal('channeltopic')),
    addPeople: () => dispatch(openModal('addpeople')),

    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
    closeModal: () => dispatch(closeModal()),


  }
}

export default withRouter(connect(mSTP, mDTP)(ChannelShow));