//only user? do i get channels from my user 
//or do i need to pull them in as well?
//fetchuser, user
import { connect } from 'react-redux';
import React from 'react';

import UploadImage from './UploadImage';
import { withRouter } from 'react-router-dom';

import { editUser } from '../../actions/user_actions'
import { openModal, closeModal } from '../../actions/modal_actions';





const mSTP = (state) => {
  return {
    user: state.entities.users[state.session.id],
  }
}

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    editUser: (user) => dispatch(editUser(user))
  }
}

export default withRouter(connect(mSTP, mDTP)(UploadImage));