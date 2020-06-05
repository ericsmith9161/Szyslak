import React from 'react';

import WorkSpaceHeader from './WorkSpaceHeader';
import UserNavigationMenu from './UserNavigationMenu';
import LoggedInHeader from './LoggedInHeader';

class Sidebar extends React.Component{
  render(){
    return (
      <div>
        <div>
          <LoggedInHeader />
        </div>
        <div>
          <WorkSpaceHeader user={this.props.currentUser} logout={this.props.logout} userInfoDropdown = {this.props.userInfoDropdown} closeModal = {this.props.closeModal} />
        </div>
        <div className="sidebar"> 
          <UserNavigationMenu user = {this.props.currentUser} channels = {this.props.channels} fetchUserChannels = {this.props.fetchUserChannels}/>
        </div>
      </div>
    )
  }
}

export default Sidebar;