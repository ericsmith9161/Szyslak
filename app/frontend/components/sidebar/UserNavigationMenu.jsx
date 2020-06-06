import React from 'react';

import UserNavigationMenuNavTable from './UserNavigationMenuNavTable';
import ChannelDropdownContainer from './ChannelDropdownContainer';
import DMDropdown from './DMDropdown';
import AppDropdown from './AppDropdown';

class UserNavigationMenu extends React.Component{

  render(){
    return (
      <div className = "user-navigation-menu">
        <UserNavigationMenuNavTable />
        <ChannelDropdownContainer />
        <DMDropdown />
        <AppDropdown />
      </div>
    )
  }
}

export default UserNavigationMenu;