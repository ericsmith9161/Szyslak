import React from 'react';
import { Link } from 'react-router-dom';

//needs to take in channels from props

class ChannelDropdown extends React.Component {

  dmDropdownClick(e) {
    e.preventDefault();
    document.getElementById("dm-dropdown").classList.toggle("show");
  }

  render() {
    return (<button onClick={dmDropDownClick} class="dm-drop-btn">Direct Messages</button>) // bulk out w/ below in MVP 3
    return (
      <div class="dm-dropdown">
        <button onClick={dmDropDownClick} class="dm-drop-btn">Direct Messages</button>
        <div id="dm-dropdown" class="dm-dropdown-content">
          {this.props.dm_conversations.map((dm_conversation) => <Link to={`/dm_conversations/${dm_conversation.id}`}>{dm_conversation.name}</Link>)}
        </div>
      </div>
    )
  }

}

// plus mark to add channels ??