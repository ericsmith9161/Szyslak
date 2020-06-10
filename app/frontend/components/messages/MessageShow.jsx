import React from 'react';

const MessageShow = ({message}) =>{
  let avatar;

  let suffix, timeStr;
  let time = message.created_at.slice(11, 16);
  let h = parseInt(time.slice(0,2));
  if(h > 12){
    h -= 12;
    suffix = " PM";
    timeStr = `${h}`.concat(":",time.slice(3,5),suffix)
  }else{
    suffix = " AM";
    timeStr = time.concat(suffix)
  }

  

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
          <span className="timestamps">{timeStr}</span>
        </div>
        <div>
          {message.body}
        </div>
      </div>
    </div>
  )
}

export default MessageShow;