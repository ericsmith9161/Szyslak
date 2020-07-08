import React from 'react';

import Member from './details_member_list/MemberListMember';
import BottomNav from './details_member_list/MemberListBottomNav';

const DetailsMemberList = ({channel, users, fetchChannelUsers}) => {
  let avatar;
  let membersWithAvs = users.map(user => {
    if (user.avatarURL === undefined) {
      avatar = window.defaultavURL;
    } else {
      avatar = user.avatarURL;
    }
    return (
      <li key={user.id} value={user.id} className="channel-members-list-li">
        <img src={avatar} width="20" height="20" />
        <span>&nbsp;&nbsp;</span>
        <h1>{user.username}</h1>
      </li>
    )
  });
  return (
    <div id="channel-members" className="channel-members hidden">
      <ul className="channel-members-list">
        {membersWithAvs}
      </ul>
      <Member />
      <BottomNav />
    </div>
  )
}

export default DetailsMemberList;