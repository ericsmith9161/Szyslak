import React from 'react';

import UserInfoDropdown from './UserInfoDropdown';
import UserWithOnlineStatus from '../user/UserWithOnlineStatus';

class WorkSpaceHeader extends React.Component{
  constructor(props){
    super(props);
    this.handleModal = this.handleDropdown.bind(this)
  }

  handleDropdown(e){
    const userDropdown = document.getElementById("user-info-dropdown")
    userDropdown.classList.toggle("hidden");
    // set display of modal User Info component
  }

  render(){
    return (
      <div className = "work-space-header" onClick={this.handleDropdown}>
        <div className="work-space-header-body">
          <p className="work-space-header-name">Szylack</p>
          <UserWithOnlineStatus user={this.props.user} />
        </div>
        <UserInfoDropdown user={this.props.user} logout = {this.props.logout}/>
        {/* new message image will go here */}
      </div>
    )
  }
}

export default WorkSpaceHeader;

//new message icon has greater z index?
//modal handling