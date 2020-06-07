import React from 'react';

class HeaderInformation extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    const numUsers = this.props.channel.subscribed_users.length;
    const numPins = 0; //make dynamic in bonus phase
    const channelTopic = this.props.channel.details //make dynamic later on
    return (
      <div className = "channel-show-header-information">
        <div className="channel-show-header-information-channel-name">
          <span>{this.props.channel.name}</span><span className="star">&nbsp;&nbsp;☆</span>
        </div> 
        <div className="channel-show-header-information-channel-info">
          <span><img className="user-svg" width="14" src={window.usersURL} />&nbsp;{numUsers}&nbsp;&nbsp;</span>
          <span className="pins">&nbsp;<img className="pin-svg" width="14" src={window.pinsURL} />
{numPins}&nbsp; </span>
          <span>&nbsp;&nbsp;{channelTopic}</span>
        </div>
      </div>
    )
  }
}

export default HeaderInformation;
