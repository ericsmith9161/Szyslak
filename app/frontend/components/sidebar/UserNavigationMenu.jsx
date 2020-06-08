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
        <div className="feature-dropdowns">
          <ChannelDropdownContainer />
          <DMDropdown />
          <AppDropdown />
        </div>

      </div>
    )
  }
}

export default UserNavigationMenu;