import React from 'react';
import { Link } from 'react-router-dom';

class DMDropdown extends React.Component {
  constructor(props){
    super(props);
    this.dmDropdownClick = this.dmDropdownClick.bind(this);
    this.state = {dropped_down: true}
  }

  dmDropdownClick(e) {
    e.preventDefault();
    document.getElementById("dm-dropdown").classList.toggle("hidden");
    this.setState({ dropped_down: !this.state.dropped_down });
  }

  componentDidMount(){
    this.props.fetchUser(this.props.sessionid)
    this.props.fetchUserDirectMessages(this.props.user.id)
  }

  render() {
    let caret;
    if (!this.state.dropped_down) {
      caret = <img width="16" src={window.caretRightURL} />
    } else {
      caret = <svg aria-hidden="true" focusable="false" data-prefix="fas" height="16" width="16" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
    }
    if (this.props.directMessages === undefined) {
      return (
        <div>
          <span><button onClick={this.channelDropdownClick} className="dm-drop-btn"> Direct Messages</button></span>
          <span className="plus-button">{this.props.createDirectMessage}</span>
        </div>
      )
    }
    else{
      return (
        <div className="dm-dropdown">
          <div className="flex-dammit">
            <button onClick={this.dmDropdownClick} className="dm-drop-btn"><span>{caret}</span>Direct Messages</button>
            {this.props.createDirectMessage}
          </div>
          <ul id="dm-dropdown" className="dm-dropdown-content">
            {this.props.directMessages.map((directMessage, idx) => <li key={idx}><Link to={`/direct_messages/${directMessage.id}`}>{directMessage.other_user_usernames.join(", ")}</Link></li> )}
          </ul>
        </div>
      )
    }

  }

}

export default DMDropdown;
