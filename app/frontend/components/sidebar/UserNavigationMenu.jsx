import React from 'react';

import UserNavigationMenuNavTable from './UserNavigationMenuNavTable';
import ChannelDropdownContainer from './ChannelDropdownContainer';
import DMDropdownContainer from './DMDropdownContainer';

class UserNavigationMenu extends React.Component{

  render(){
    return (
      <div className = "user-navigation-menu">
        <UserNavigationMenuNavTable />
        <div className="feature-dropdowns">
          <ChannelDropdownContainer />
          <DMDropdownContainer />
        </div>

      </div>
    )
  }
}

export default UserNavigationMenu;