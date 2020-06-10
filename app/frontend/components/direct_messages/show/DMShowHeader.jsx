import React from 'react';

import ProfileFull from '../../user/ProfileFull'
import Information from './DMShowHeaderInformation';

class DMShowHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDetails(e) {
    e.preventDefault();
    const headerDetails = document.querySelector(".user-profile-full");
    const channelShow = document.querySelector(".channel-show");
    const channelIdx = document.querySelector(".channel-index");
    const detailsText = document.querySelector(".details-text");
    const detailsBtn = document.querySelector(".details-button");
    headerDetails.classList.toggle("hidden");
    if (channelIdx !== null) {
      channelIdx.classList.toggle("full");
      channelIdx.classList.toggle("part");
    }
    channelShow.classList.toggle("full");
    channelShow.classList.toggle("part");
    detailsText.classList.toggle("hidden");
    detailsBtn.classList.toggle("selected");


    // channelShow.classList.remove("full");
    // channelShow.classList.add("part");
  }

  render() {
    let otherUser;
    for(let i =0; i < this.props.directMessage.subscribed_users.length; i++){
      if (this.props.directMessage.subscribed_users[i] != this.props.currentUserId){
        otherUser = this.props.directMessage.subscribed_users[i];
      }
    }
    return (
      <div className="dm-show-header">
        <Information directMessage={this.props.directMessage} />
        <button className="details-button" onClick={this.handleDetails}><span className="i-btn">ⓘ</span> <span className="details-text">&nbsp;&nbsp;Details</span></button>
        <ProfileFull viewedUser={this.props.viewedUser} currentUserId={this.props.currentUserId} />
      </div>
    )
  }
}

export default DMShowHeader;

//needs to keep track of details click state
//onclick remove class from details hide
//onclick remove class from channel-show channel-show
//onclick add class to channel-show channel-show-part