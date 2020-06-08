import React from 'react';

const MessageShow = ({message}) =>{
  return(
    <div className = "message">
      <div>
        {/* avatar goes here */}
      </div>
      <div className = "message-content">
        <div>
          <b>{message.username}</b>
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