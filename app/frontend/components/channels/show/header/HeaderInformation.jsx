import React from 'react';

class HeaderInformation extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    const numUsers = this.props.channel.subscribed_users.length;
    const numPins = 0; //make dynamic in bonus phase
    const channelTopic = "Welcome to my website" //make dynamic later on
    return (
      <div className = "channel-show-header-information">
        <div className="channel-show-header-information-channel-name">
          <span>{this.props.channel.name}</span>
        </div> 
        <div className="channel-show-header-information-channel-info">
          <span>👤 {numUsers} </span>
          <span>📍 {numPins} </span>
          <span>{channelTopic}</span>
        </div>
      </div>
    )
  }
}

export default HeaderInformation;
