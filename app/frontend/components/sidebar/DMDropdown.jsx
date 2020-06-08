import React from 'react';
import { Link } from 'react-router-dom';

//needs to take in channels from props

class DMDropdown extends React.Component {
  constructor(props){
    super(props);
    this.dmDropdownClick = this.dmDropdownClick.bind(this);
    this.state = {dropped_down: true}
  }

  dmDropdownClick(e) {
    e.preventDefault();
    this.setState({ dropped_down: !this.state.dropped_down });
    document.getElementById("dm-dropdown").classList.toggle("show");
  }

  render() {
    let caret;
    if (!this.state.dropped_down) {
      caret = <img width="16" src={window.caretRightURL} />
    } else {
      caret = <svg aria-hidden="true" focusable="false" data-prefix="fas" height="16" width="16" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
    }
    return (<button onClick={this.dmDropdownClick} className="dm-drop-btn"><span>{caret}</span>Direct Messages</button>) // bulk out w/ below in MVP 3
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