import React from 'react';
import { closeModal } from '../actions/modal_actions'
import { connect } from 'react-redux';
import UserInfoDropdownContainer from './sidebar/UserInfoDropdownContainer';
import ChannelFormContainer from './channels/form/ChannelFormContainer';
import ProfileFormContainer from './user/UserEditFormContainer';
import ChannelPlusButtonContainer from './sidebar/ChannelPlusButtonContainer';
import ChannelTopicContainer from './channels/show/header/ChannelTopicContainer';
import DMFormContainer from '../components/direct_messages/form/DMFormContainer';
import UploadImageContainer from '../components/user/UploadImageContainer';
import AddPeopleContainer from '../components/channels/show/header/AddPeopleContainer';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'userinfodropdown':
      component = <UserInfoDropdownContainer />;
      return (
        <div className="modal-background-user-info-dropdown" onClick={closeModal}>
          <div className="modal-child-user-info-dropdown" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
    case 'channelplusbutton':
      component = <ChannelPlusButtonContainer />;
      return (
        <div className="modal-background-channel-plus-button" onClick={closeModal}>
          <div className="modal-child-channel-plus-button" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
    case 'createchannel':
      component = <ChannelFormContainer />;
      return (
        <div className="modal-background-channel-form" onClick={closeModal}>
          <div className="modal-child-channel-form" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
    case 'editprofile':
      component = <ProfileFormContainer />;
      return (
        <div className="modal-background-profile" onClick={closeModal}>
          <div className="modal-child-profile" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
    case 'channeltopic':
      component = <ChannelTopicContainer />;
      return (
        <div className="modal-background-channel-topic" onClick={closeModal}>
          <div className="modal-child-channel-topic" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
    case 'directmessageplusbutton':
      component = <DMFormContainer />;
      return (
        <div className="modal-background-dm-plus-button" onClick={closeModal}>
          <div className="modal-child-dm-plus-button" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
    case 'addavatar':
      component = <UploadImageContainer />;
      return (
        <div className="modal-background-add-avatar" onClick={closeModal}>
          <div className="modal-child-add-avatar" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
    case 'addpeople':
      component = <AddPeopleContainer />;
      return (
        <div className="modal-background-add-people" onClick={closeModal}>
          <div className="modal-child-add-people" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
    default:
      return null;
  }

}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);