import React from 'react';

import UserInfo from './UserInfoModal';
import UserWithOnlineStatus from '../user/UserWithOnlineStatus';

class WorkSpaceHeader extends React.Component{
  handleModal(e){
    // set display of modal User Info component
  }

  render(){
    return (
      <div className = "work-space-header" onClick={handleModal}>
        <div>
          <p className = "work-space-header-name">Szylack</p>
          <UserWithOnlineStatus user={this.props.user}/>
        </div>
        {/* new message image will go here */}
      </div>
    )
  }
}

//new message icon has greater z index?
//modal handling