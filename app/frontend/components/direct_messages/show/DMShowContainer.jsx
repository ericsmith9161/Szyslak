import React from 'react';
import { connect } from 'react-redux';
import { fetchDirectMessage} from '../../../actions/direct_message_actions';
import { fetchDirectMessageMessages} from '../../../actions/message_actions';

import DMShow from './DMShow';
import { withRouter } from 'react-router-dom';


const mSTP = (state, ownProps) => {
  return {
    directMessage: state.entities.directMessages[ownProps.match.params.directMessageId],
    messages: Object.values(state.entities.messages),
    directMessageId: ownProps.match.params.directMessageId,
    currentUserId: state.session.id
  }
}

const mDTP = (dispatch) => {
  return {
    fetchDirectMessage: (directMessageId) => dispatch(fetchDirectMessage(directMessageId)),
    fetchDirectMessageMessages: (directMessageId) => dispatch(fetchDirectMessageMessages(directMessageId)),
  }
}

export default withRouter(connect(mSTP, mDTP)(DMShow));