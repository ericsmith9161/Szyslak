import React from 'react';
import {Link} from 'react-router-dom';

//needs to take in channels from props

class ChannelDropdown extends React.Component{

  channelDropdownClick(e) {
    e.preventDefault();
    document.getElementById("channel-dropdown").classList.toggle("show");
  }

  render(){
    return (<button onClick={channelDropDownClick} class="channel-drop-btn">Channels</button>) //bulk out in MVP 2
    return (
      <div class="channel-dropdown">
        <button onClick={channelDropDownClick} class="channel-drop-btn">Channels</button>
        <div id="channel-dropdown" class="channel-dropdown-content">
          {this.props.channels.map((channel) => <Link to={`/channels/${channel.id}`}>{channel.name}</Link> )}
        </div>
      </div>
    )
  }

}

// plus mark to add channels ??
