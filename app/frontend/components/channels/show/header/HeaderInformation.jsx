import React from 'react';

class HeaderInformation extends React.Component {
  constructor(props){
    super(props);
    this.state = {starred: false}
    this.toggleStarred = this.toggleStarred.bind(this);
  }

  toggleStarred(e){
    e.preventdefault;
    this.setState({starred: !this.state.starred})
  }


  render(){
    let imgsrc;
    if (this.state.starred){
      imgsrc = window.solidstarURL
    }else{
      imgsrc = window.starURL
    }
    const numUsers = this.props.channel.subscribed_users.length;
    const numPins = 0; //make dynamic in bonus phase
    const topic = this.props.channel.topic;
    return (
      <div className = "channel-show-header-information">
        <div className="channel-show-header-information-channel-name">
          <span>{this.props.channel.name}</span><span>&nbsp;&nbsp;<img onClick={this.toggleStarred} className="star" src={imgsrc} width="14"></img></span>
        </div> 
        <div className="channel-show-header-information-channel-info">
          <span><img className="user-svg" width="14" src={window.usersURL} />&nbsp;{numUsers}&nbsp;&nbsp;</span>
          <span className="pins">&nbsp;<img className="pin-svg" width="14" src={window.pinsURL} />
          {numPins}&nbsp; </span>
          <span>&nbsp;&nbsp;<button onClick = {() => this.props.openChannelTopic()}>{topic}</button></span>
        </div>
      </div>
    )
  }
}

export default HeaderInformation;
