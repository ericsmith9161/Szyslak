import React from 'react';

const MessageShow = ({message}) =>{
  let avatar;
  console.log(message.user_avatar)
  if (message.user_avatar === undefined){
    avatar = window.defaultavURL;
  }else{
    avatar = message.user_avatar;
  }
  return(
    <div className = "message">
      <div>
        <img src={avatar} width="40" height="40"/>
      </div>
      <div className = "message-content">
        <div>
          <b>{message.username}</b>&nbsp;
          <span className="timestamps">{message.created_at.slice(11, 16)}</span>
        </div>
        <div>
          {message.body}
        </div>
      </div>
    </div>
  )
}

export default MessageShow;