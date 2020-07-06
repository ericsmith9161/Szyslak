import React from 'react';

import About from './header_details/DetailsAbout';
import MemberList from './header_details/DetailsMemberList';
import AddPeopleContainer from './AddPeopleContainer';
import {withRouter} from 'react-router-dom';

class HeaderDetails extends React.Component {
  constructor(props){
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.aboutClick = this.aboutClick.bind(this);
    this.membersClick = this.membersClick.bind(this);
    this.state = {
      channel: this.props.channel,
      about_dropped_down: false,
      members_dropped_down: false
    }
  }

  aboutClick(e) {
    e.preventDefault();
    document.getElementById("channel-details-about").classList.toggle("hidden");
    this.setState({ about_dropped_down: !this.state.about_dropped_down });
  }

  membersClick(e) {
    e.preventDefault();
    document.getElementById("channel-members").classList.toggle("hidden");
    this.setState({ members_dropped_down: !this.state.members_dropped_down });
  }

  handleClose(e){
    e.preventDefault();
    const headerDetails = document.querySelector(".channel-header-details");
    const channelShow = document.querySelector(".channel-show");
    const channelIdx = document.querySelector(".channel-index");
    const detailsText = document.querySelector(".details-text");
    const detailsBtn = document.querySelector(".details-button");
    headerDetails.classList.toggle("hidden");
    if (channelIdx !== null){
      channelIdx.classList.toggle("full");
      channelIdx.classList.toggle("part");
    }
    channelShow.classList.toggle("full");
    channelShow.classList.toggle("part");
    detailsText.classList.toggle("hidden");
    detailsBtn.classList.toggle("selected");
    e.stopPropagation();
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteChannel(this.props.channel.id).then(this.props.history.push('/channels/1'))
  }

  render() {
    let aboutCaret, memberCaret;
    if (this.state.about_dropped_down) {
      aboutCaret = <svg aria-hidden="true" focusable="false" data-prefix="fas" height="16" width="16" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
    } else {
      aboutCaret = <img width="16" src={window.caretRightURL} />
    }
    if (this.state.members_dropped_down) {
      memberCaret = <svg aria-hidden="true" focusable="false" data-prefix="fas" height="16" width="16" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
    } else {
      memberCaret = <img width="16" src={window.caretRightURL} />
    }
    return (
      <div className="channel-header-details hidden">
        <div className="header-details-header">
          <div className = "header-details-header-info">
            <p>Details</p>
            <p>{this.props.channel.name}</p>
          </div>
          <div>
            <button onClick={this.handleClose}><img src={window.xURL} width="13"/></button>
          </div>
        </div>
        <div className="channel-header-details-options">
          <div className="channel-header-details-option">
            <span className="c-h-d-o-img">
              <button onClick={() => this.props.addPeople()}><img className="c-h-d-o-img" src={window.usersURL} width="17" height="17" /></button>
            </span>
            <span>
              Add
            </span>
          </div>
          <div className="channel-header-details-option">
            <span className="c-h-d-o-img">
              <img src={window.searchURL} width="17"  />
            </span>
            <span>
              Find
            </span>
          </div>
        </div>
        <ul className="c-h-d-items">
          <li className="c-h-d-item">
            <div>
              <span><b>About</b></span> <span className="caret" onClick={this.aboutClick}>{aboutCaret}</span>
            </div> 
            <About channel={this.props.channel} />
          </li>
          <li className="c-h-d-item">
            <div>
              <span><b>Members</b> </span> <span className="caret" onClick={this.membersClick}>{memberCaret}</span>
            </div> 
            <MemberList channel={this.props.channel} users={this.props.users} fetchChannelUsers={this.props.fetchChannelUsers} /></li>
          <li className="c-h-d-button"> <button onClick={this.handleDelete}><b>Delete Channel</b></button></li>
        </ul>
    

        
      </div>
    )
  }
}

export default withRouter(HeaderDetails);