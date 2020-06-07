import React from 'react';

import UserWithOnlineStatus from '../user/UserWithOnlineStatus';

class WorkSpaceHeader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "work-space-header" >
        <div>
          <img className="logo" src={window.moegoURL} width="30" />
        </div>
        <div className="work-space-header-body">
          {this.props.userInfoDropdown}
          <UserWithOnlineStatus user={this.props.user} />
        </div>
        <span>✎</span>
      </div>
    )
  }
}

export default WorkSpaceHeader;

//new message icon has greater z index?
//modal handling