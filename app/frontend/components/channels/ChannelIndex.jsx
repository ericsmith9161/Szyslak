import React from 'react';
import {Link} from 'react-router-dom';

class ChannelIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchChannels();
  }

  render(){
    return (
      <div className = "channel-index full">
        <h4>Channel browser</h4>
        <div className = "channel-index-below-searchbar">
          <span>{this.props.channels.length} channels</span>
          <span>
            {/* <span>Sort: A to Z</span> <span>filter</span>  */}
          </span>
        </div>
        <ul className="channel-list">
          {this.props.channels.map((channel, idx) => 
            <li key = {idx}>
              <Link to={`/channels/${channel.id}`}>
                <p className="c-i-channel-name">{channel.name}</p>
                <p className="c-i-num-members">{channel.subscribed_users.length} members</p>
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default ChannelIndex;

