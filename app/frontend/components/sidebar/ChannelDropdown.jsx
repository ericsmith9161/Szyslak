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
    // document.getElementById("channel-dropdown").classList.toggle("show");
  }

  render(){
      return(
        <button onClick={this.channelDropdownClick} className="channel-drop-btn">▼ Channels</button>
      )
    //   return(
    //   <div className="channel-dropdown">
    //     <button onClick={this.channelDropdownClick} className="channel-drop-btn">▼ Channels</button>
    //     <div id="channel-dropdown" className="channel-dropdown-content">
    //       {this.props.channels.map((channel) => <Link to={`/channels/${channel.id}`}>{channel.name}</Link> )}
    //     </div>
    //   </div>
    // )
  }

}

export default ChannelDropdown;

// plus mark to add channels ??
