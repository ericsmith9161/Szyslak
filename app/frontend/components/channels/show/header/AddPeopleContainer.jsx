import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../../../actions/modal_actions';
import { fetchUsers, receiveUser, fetchChannelUsers } from '../../../../actions/user_actions';
import {editChannel, fetchChannel} from '../../../../actions/channel_actions';

import AddPeople from './AddPeople';

const mSTP = (state, ownProps) => {
  console.log(ownProps)
  return {
    currentUserId: state.session.id,
    users: Object.values(state.entities.users),
    currentChannelId: ownProps.location.pathname.split("/")[2],
    // currentChannelId: ownProps.match.params.channelId,
    usersPOJO: state.entities.users,
    currentChannel: state.entities.channels[ownProps.location.pathname.split("/")[2]],
    // currentChannel: state.entities.channels[ownProps.match.params.channelId],

  }
}

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers()),
    editChannel: (channel) => dispatch(editChannel(channel)),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    fetchChannelUsers: (channelId) => dispatch(fetchChannelUsers(channelId))
  }
}

export default withRouter(connect(mSTP, mDTP)(AddPeople));