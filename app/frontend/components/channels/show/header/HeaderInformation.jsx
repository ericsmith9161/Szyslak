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
      <div>
        <div className="channel-show-header-information-channel-name">
          <p>{this.props.channel.name}</p>
        </div> 
        <div className="channel-show-header-information-channel-info">
          <p>👤 {numUsers} </p>
          <p>📍 {numPins} </p>
          <p>{channelTopic}</p>
        </div>
      </div>
    )
  }
}

export default HeaderInformation;
