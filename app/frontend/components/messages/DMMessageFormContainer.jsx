import React from 'react';
import { connect } from 'react-redux';

import DMMessageForm from './DMMessageForm';
import { withRouter } from 'react-router-dom';
import { fetchDirectMessage } from '../../actions/direct_message_actions';
import { fetchUser } from '../../actions/user_actions';
import { editMessage} from '../../actions/message_actions';


const mSTP = (state, ownProps) => {
  return {
    message: { body: "", user_id: state.session.id, messageable_type: 'DirectMessage', messageable_id: ownProps.match.params.directMessageId },
    directMessage: state.entities.directMessages[ownProps.match.params.directMessageId],
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = (dispatch) => {
  return {
    fetchDirectMessage: directMessageId => dispatch(fetchDirectMessage(directMessageId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    editMessage: (message) => dispatch(editMessage(message))
  }
}

export default withRouter(connect(mSTP, mDTP)(DMMessageForm));