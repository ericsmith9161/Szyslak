import React from 'react';

const UserWithOnlineStatus = ({user}) => {
  if (user){
    return (
      <div>
        <div className="online-status-icon">

        </div>
        <p>&nbsp;&nbsp;{user.username} </p>
      </div>
    )
  }else{
    return null
  }

}

export default UserWithOnlineStatus;