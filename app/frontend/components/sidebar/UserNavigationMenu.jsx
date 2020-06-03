import React from 'react';

import UserNavigationMenuNavTable from './UserNavigationMenuNavTable';
import ChannelDropdown from './ChannelDropdown';
import DMDropdown from './DMDropdown';
import AppDropdown from './AppDropdown';

class UserNavigationMenu extends React.Component{

  render(){
    return (
      <div className = "user-navigation-menu">
        <UserNavigationMenuNavTable />
        <ChannelDropdown />
        <DMDropdown />
        <AppDropdown />
      </div>
    )
  }
}

export default UserNavigationMenu;