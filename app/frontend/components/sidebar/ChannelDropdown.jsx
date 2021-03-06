import React from 'react';
import {Link} from 'react-router-dom';


class ChannelDropdown extends React.Component{
  constructor(props){
    super(props);
    this.channelDropdownClick = this.channelDropdownClick.bind(this);
    this.state = {};
  }

  channelDropdownClick(e) {
    e.preventDefault();
    document.getElementById("channel-dropdown").classList.toggle("hidden");
    this.setState({dropped_down: !this.state.dropped_down});
  }

  componentDidMount(){
    this.props.fetchUser(this.props.sessionid);
    this.props.fetchUserChannels(this.props.user.id);
  }


  render(){
    if (this.props.channels === undefined){
      return (
        <div>
          <span><button onClick={this.channelDropdownClick} className="channel-drop-btn"> Channels</button></span>
          <span className = "plus-button">{this.props.createChannel}</span>
        </div>
      )
    }
    else{
      const channels = this.props.channels.filter(channel => channel.subscribed_users.includes(this.props.sessionid));
      let caret;
      if (this.state.dropped_down){
        caret = <img width="16" src={window.caretRightURL} />
      }else{
        caret = <svg aria-hidden="true" focusable="false" data-prefix="fas" height="16" width="16" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
      }
      return (
        <div className="channel-dropdown">
          <div className = "flex-dammit">
              <button onClick={this.channelDropdownClick} className="channel-drop-btn">{caret} Channels</button>
              {this.props.createChannel}
          </div>
          <ul id="channel-dropdown" className="channel-dropdown-content">
            {channels.map((channel, idx) => <li key={idx}> <Link to={`/channels/${channel.id}`}># {channel.name}</Link> </li>)}
          </ul>
        </div>
      )
    }
  }

}

export default ChannelDropdown;
