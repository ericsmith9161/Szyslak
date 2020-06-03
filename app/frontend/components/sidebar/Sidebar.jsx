import React from 'react';

import WorkSpaceHeader from './WorkSpaceHeader';
import UserNavigationMenu from './UserNavigationMenu';

class Sidebar extends React.Component{
  render(){
    return (
      <div className = "sidebar"> 
        <WorkSpaceHeader user = {this.props.currentUser} logout = {this.props.logout}/>
        <UserNavigationMenu user = {this.props.currentUser}/>
      </div>
    )
  }
}

export default Sidebar;