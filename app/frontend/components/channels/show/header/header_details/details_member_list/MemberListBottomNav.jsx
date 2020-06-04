import React from 'react';

import AddPeople from './member_list_bottom_nav/BottomNavAddPeople'
import UserSearch from './member_list_bottom_nav/BottomNavUserSearch'

class MemberListBottomNav extends React.Component {

  render() {
    return (
      <div>
        <UserSearch />
        <AddPeople />
      </div>
    )
  }
}

export default MemberListBottomNav;