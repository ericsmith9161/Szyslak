import { connect } from 'react-redux';
import React from 'react';

import { fetchChannels } from '../../actions/channel_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import ChannelPlusButton from './ChannelPlusButton';





const mSTP = (state) => {
  return {
    sessionid: state.session.id,
    user: state.entities.users[state.session.id],
    channels: Object.values(state.entities.channels)
  }
}

const mDTP = (dispatch) => {
  return {
    createChannel: (
      <button onClick={() => dispatch(openModal('createchannel'))}>Create a channel</button>
    ),
    closeModal: () => dispatch(closeModal()),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchUser: (userId) => dispatch(fetchUser(userId))


  }
}

export default connect(mSTP, mDTP)(ChannelPlusButton)