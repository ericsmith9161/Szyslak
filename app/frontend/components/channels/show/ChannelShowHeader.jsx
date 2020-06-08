import React from 'react';

import Details from './header/HeaderDetails';
import Information from './header/HeaderInformation';

class ChannelShowHeader extends React.Component {
  constructor(props){
    super(props);
  }

  handleDetails(e){
    e.preventDefault();
    const headerDetails = document.querySelector(".channel-header-details");
    const channelShow = document.querySelector(".channel-show");
    const channelIdx = document.querySelector(".channel-index")
    headerDetails.classList.toggle("hidden");
    if (channelIdx !== null){
      channelIdx.classList.toggle("full");
      channelIdx.classList.toggle("part");
    }
    channelShow.classList.toggle("full");
    channelShow.classList.toggle("part");

    // channelShow.classList.remove("full");
    // channelShow.classList.add("part");
  }

  render() {
    return (
      <div className = "channel-show-header">
        <Information channel={this.props.channel} openChannelTopic = {this.props.openChannelTopic}/>
        <button onClick={this.handleDetails}><span>ⓘ</span> &nbsp;&nbsp;Details</button>
        <Details channel = {this.props.channel} deleteChannel = {this.props.deleteChannel}/>
      </div>
    )
  }
}

export default ChannelShowHeader;

//needs to keep track of details click state
//onclick remove class from details hide
//onclick remove class from channel-show channel-show
//onclick add class to channel-show channel-show-part