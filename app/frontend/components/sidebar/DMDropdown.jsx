import React from 'react';
import { Link } from 'react-router-dom';

//needs to take in channels from props

class DMDropdown extends React.Component {
  constructor(props){
    super(props);
    this.dmDropdownClick = this.dmDropdownClick.bind(this);
  }

  dmDropdownClick(e) {
    e.preventDefault();
    document.getElementById("dm-dropdown").classList.toggle("show");
  }

  render() {
    return (<button onClick={this.dmDropdownClick} className="dm-drop-btn"><span>▼</span>Direct Messages</button>) // bulk out w/ below in MVP 3
    return (
      <div class="dm-dropdown">
        <button onClick={dmDropdownClick} className="dm-drop-btn"><span>▼</span>Direct Messages</button>
        <div id="dm-dropdown" class="dm-dropdown-content">
          {this.props.dm_conversations.map((dm_conversation) => <Link to={`/dm_conversations/${dm_conversation.id}`}>{dm_conversation.name}</Link>)}
        </div>
      </div>
    )
  }

}

export default DMDropdown;
// plus mark to add channels ??