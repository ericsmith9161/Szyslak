import React from 'react';

const UserWithOnlineStatus = ({user}) => {
  return (
    <div>
      <div className = "online-status-icon">

      </div>
      <p>&nbsp;&nbsp;{user.username} </p>
    </div>
  )
}

export default UserWithOnlineStatus;