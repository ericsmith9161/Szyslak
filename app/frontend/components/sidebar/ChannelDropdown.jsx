import React from 'react';
import {Link} from 'react-router-dom';

//needs to take in channels from props

class ChannelDropdown extends React.Component{
  constructor(props){
    super(props);
    this.channelDropdownClick = this.channelDropdownClick.bind(this);
    this.state = {dropped_down: true};
  }

  channelDropdownClick(e) {
    e.preventDefault();
    this.setState({dropped_down: !this.state.dropped_down});
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
          <span><button onClick={this.channelDropdownClick} className="channel-drop-btn"> Channels</button></span>
          <span>{this.props.createChannel}</span>
        </div>
      )
    }
    else{
      let caret;
      if (!this.state){
        caret = <img width="18" src={window.caretRightURL} />
      }else{
        caret = <svg aria-hidden="true" focusable="false" data-prefix="fas" height="18" width="18" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
      }
      return (
        <div className="channel-dropdown">
          <div className = "flex-dammit">
              <button onClick={this.channelDropdownClick} className="channel-drop-btn">{caret} Channels</button>
              {this.props.createChannel}
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
