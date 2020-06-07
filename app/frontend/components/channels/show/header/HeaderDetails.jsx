import React from 'react';

import About from './header_details/DetailsAbout';
import MemberList from './header_details/DetailsMemberList'
import {withRouter} from 'react-router-dom';

class HeaderDetails extends React.Component {
  constructor(props){
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = this.props.channel
  }

  handleClose(e){
    e.preventDefault();
    const headerDetails = document.querySelector(".channel-header-details");
    const channelShow = document.querySelector(".channel-show");

    headerDetails.classList.toggle("hidden");
    channelShow.classList.toggle("full");
    channelShow.classList.toggle("part");
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteChannel(this.props.channel.id).then(this.props.history.push('/channels/1'))
  }

  render() {
    return (
      <div className="channel-header-details hidden">
        <div className="header-details-header">
          <div className = "header-details-header-info">
            <p>Details</p>
            <p>{this.props.channel.name}</p>
          </div>
          <div>
            <button onClick={this.handleClose}>X</button>
          </div>
        </div>
        <div className="channel-header-details-options">
          <div className="channel-header-details-option">
            <span>
               +
            </span>
            <span>
              Add
            </span>
          </div>
          <div>
            <span>
              🔍
            </span>
            <span>
              Find
            </span>
          </div>
          <div>
            <span>
               ☎
            </span>
            <span>
              Call
            </span>
          </div>
          <div>
            <span>
              ...
            </span>
            <span>
              More
            </span>
          </div>
        </div>
        <ul>
          <li> <span><b>About</b></span><About channel={this.props.channel} /> <span>></span></li>
          <li> <span><b>Members</b> </span><MemberList channel={this.props.channel} /> <span>></span></li>
          <li> <span><b>Shortcuts</b></span> <span>></span></li>
          <li> <span><b>Pinned Items</b></span> <span>></span></li>
          <li> <span><b>Shared Files</b></span> <span>></span></li>
          <li> <button onClick={this.handleDelete}><span><b>Delete Channel</b></span><span>></span></button></li>
        </ul>
        

        
      </div>
    )
  }
}

export default withRouter(HeaderDetails);