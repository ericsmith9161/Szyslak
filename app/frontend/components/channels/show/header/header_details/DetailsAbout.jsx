import React from 'react';

const DetailsAbout = ({channel}) => {
  console.log(channel)
  let description = channel.details || "Describe what this channel is so people can find it"
  let createdDate, createdTime;
  createdTime = new Date(parseFloat(channel.created_at)*1000)
  createdDate = createdTime.toDateString();
  return (
    <div id="channel-details-about" className="channel-details-about hidden">
      <div className="channel-details-dropdown-topic">
        <h3>Topic</h3>
        <p>{channel.topic}</p>
      </div>
      <div className="channel-details-dropdown-description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div className="channel-details-dropdown-created-on">
        <span>Created on {createdDate}</span>
      </div>
    </div>
  )
}

export default DetailsAbout;