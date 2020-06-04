import React from 'react';

import Member from './details_member_list/MemberListMember';
import BottomNav from './details_member_list/MemberListBottomNav';

class DetailsMemberList extends React.Component {

  render() {
    return (
      <div>
        <Member />
        <BottomNav />
      </div>
    )
  }
}

export default DetailsMemberList;