import React from 'react';
import { connect } from 'react-redux';
import { createDirectMessage } from '../../../actions/direct_message_actions';
import { withRouter } from 'react-router-dom'
import { closeModal } from '../../../actions/modal_actions'

import DMForm from './DMForm';

const mSTP = (state) => {
  return {
    direct_message: { current_user_id: state.session.id, messagee_ids: []}
  }
}

const mDTP = (dispatch) => {
  return {
    createDirectMessage: (channel) => dispatch(createDirectMessage(channel)),
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mSTP, mDTP)(DMForm));