import React from 'react';
import {Link} from 'react-router-dom';

//needs to take in channels from props

class ChannelDropdown extends React.Component{
  constructor(props){
    super(props);
    this.channelDropdownClick = this.channelDropdownClick.bind(this);
  }

  channelDropdownClick(e) {
    e.preventDefault();
    document.getElementById("channel-dropdown").classList.toggle("hidden");
  }

  componentDidMount(){
    this.props.fetchUser(this.props.sessionid);
    this.props.fetchUserChannels(this.props.user.id);
  }


  render(){
    if (this.props.channels === undefined){
      return (
        <div>
          <span><button onClick={this.channelDropdownClick} className="channel-drop-btn">► Channels</button></span>
          <span>{this.props.createChannel}</span>
        </div>
      )
    }
    else{
      return (
        <div className="channel-dropdown">
          <div>
            <span><button onClick={this.channelDropdownClick} className="channel-drop-btn">► Channels</button></span>
            <span>{this.props.createChannel}</span>
          </div>
          <ul id="channel-dropdown" className="channel-dropdown-content">
            {this.props.channels.map((channel, idx) => <li key={idx}> <Link to={`/channels/${channel.id}`}>{channel.name}</Link> </li>)}
          </ul>
        </div>
      )
    }
  }

}

export default ChannelDropdown;

// plus mark to add channels ??
