import React from 'react';

import WorkSpaceHeader from './WorkSpaceHeader';
import UserNavigationMenu from './UserNavigationMenu';

class Sidebar extends React.Component{
  render(){
    <div>
      <WorkSpaceHeader />
      <UserNavigationMenu />
    </div>
  }
}

export default Sidebar;