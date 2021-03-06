import React from 'react';

class ProfileFull extends React.Component{
  constructor(props){
    super(props);
    this.closeProfile = this.closeProfile.bind(this);
  }

  closeProfile(e) {
    e.preventDefault();
    const profile = document.querySelector(".user-profile-full");
    const channelShow = document.querySelector(".channel-show");
    const channelIdx = document.querySelector(".channel-index");
    const userIdx = document.querySelector(".user-index");
    const dmShow = document.querySelector(".dm-show")
    const detailsBtn = document.querySelector(".details-button")
    const detailsText = document.querySelector(".details-text");


    profile.classList.add("hidden");
    if (channelShow !== null) {
      channelShow.classList.toggle("full");
      channelShow.classList.toggle("part");
    }
    if (channelIdx !== null) {
      channelIdx.classList.toggle("full");
      channelIdx.classList.toggle("part");
    }
    if (userIdx !== null) {
      userIdx.classList.toggle("full");
      userIdx.classList.toggle("part");
    }
    if (dmShow !== null){
      dmShow.classList.toggle("full");
      dmShow.classList.toggle("part");
      detailsText.classList.toggle("hidden");
      detailsBtn.classList.toggle("selected");
    }
  }

  render(){
    let time = new Date();
    let avatar;
    if (this.props.viewedUser === undefined){
      return null;
    }
    if (this.props.viewedUser.avatarURL === undefined){
      avatar = window.defaultavURL;
    }else{
      avatar = this.props.viewedUser.avatarURL
    }
    window.kidprops = this.props.viewedUser;
    window.props = this.props;
    return(
      <div className="user-profile-full hidden">
        <div className="user-profile-header">
          <div>
            <h1>Details</h1>
            <p>{this.props.viewedUser.username}</p>
          </div>
          <button onClick = {this.closeProfile}><img src={window.xURL} width="10" height="10"/></button>
        </div>
        <div className = "user-profile-body">
          <img src={avatar} />
          <h3>{this.props.viewedUser.username}</h3>
          {/* add ability to start dm convo here */}
        </div>
        <div className = "user-profile-foot">
          <div>
            <h4>Display name</h4>
            <p>{this.props.viewedUser.username}</p>
          </div>
          <div>
            <h4>Local Time</h4>
            <p>{time.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileFull;