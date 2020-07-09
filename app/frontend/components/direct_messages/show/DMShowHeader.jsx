import React from 'react';

import Information from './DMShowHeaderInformation';
import DMShow from './DMShow';
import ProfileFull from '../../user/ProfileFull';

class DMShowHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDetails(e) {
    e.preventDefault();
    const headerDetails = document.querySelector(".user-profile-full");
    const channelShow = document.querySelector(".channel-show");
    const dmShow = document.querySelector(".dm-show");
    const channelIdx = document.querySelector(".channel-index");
    const detailsText = document.querySelector(".details-text");
    const detailsBtn = document.querySelector(".details-button");
    headerDetails.classList.toggle("hidden");
    if (channelIdx !== null) {
      channelIdx.classList.toggle("full");
      channelIdx.classList.toggle("part");
    }

    dmShow.classList.toggle("full");
    dmShow.classList.toggle("part");
    detailsText.classList.toggle("hidden");
    detailsBtn.classList.toggle("selected");

  }

  render() {
    return (
      <div className="dm-show-header">
        <Information directMessage={this.props.directMessage} />
        <button className="details-button" onClick={this.handleDetails}><span className="i-btn">ⓘ</span> <span className="details-text">&nbsp;&nbsp;Details</span></button>
      </div>
    )
  }
}

export default DMShowHeader;