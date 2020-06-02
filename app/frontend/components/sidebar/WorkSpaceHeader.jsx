import React from 'react';

import UserInfoDropdown from './UserInfoDropdown';
import UserWithOnlineStatus from '../user/UserWithOnlineStatus';

class WorkSpaceHeader extends React.Component{
  constructor(props){
    super(props);
    this.handleModal = this.handleModal.bind(this)
  }

  handleModal(e){
    // set display of modal User Info component
  }

  render(){
    return (
      <div className = "work-space-header" onClick={this.handleModal}>
        <div>
          <p className = "work-space-header-name">Szylack</p>
          <UserWithOnlineStatus user={this.props.user}/>
        </div>
        {/* new message image will go here */}
      </div>
    )
  }
}

export default WorkSpaceHeader;

//new message icon has greater z index?
//modal handling