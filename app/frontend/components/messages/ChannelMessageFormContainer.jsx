import React from 'react';
import { connect } from 'react-redux';

import ChannelMessageForm from './ChannelMessageForm';
import {withRouter} from 'react-router-dom';
import {fetchChannel} from '../../actions/channel_actions';
import { fetchChannelUsers } from '../../actions/user_actions';


const mSTP = (state, ownProps) => {
  return {
    message: {body: "", user_id: state.session.id, messageable_type: 'Channel', messageable_id: ownProps.match.params.channelId},
    channel: state.entities.channels[ownProps.match.params.channelId],
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = (dispatch) => {
  return{
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    fetchChannelUsers: channelId => dispatch(fetchChannelUsers(channelId))
  }
}

export default withRouter(connect(mSTP, mDTP)(ChannelMessageForm));