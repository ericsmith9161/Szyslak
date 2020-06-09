import React from 'react';

class ProfileFull extends React.Component{
  constructor(props){
    super(props);
    this.closeProfile = this.closeProfile.bind(this);
  }

  componentDidMount(){
    console.log(this.props)
    this.props.fetchUser(this.props.currentUserId)
  }

  closeProfile(e){
    e.preventDefault();
    const profile = document.querySelector(".user-profile-full");
    const channelShow = document.querySelector(".channel-show");
    const channelIdx = document.querySelector(".channel-index")

    profile.classList.toggle("hidden");
    if (channelShow !== null){
      channelShow.classList.toggle("full");
      channelShow.classList.toggle("part");
    }
    if (channelIdx !== null){
      channelIdx.classList.toggle("full");
      channelIdx.classList.toggle("part");
    }
  }

  render(){
    let time = new Date();
    let avatar;
    console.log(this.props)
    if (this.props.viewedUser === undefined){
      return null;
    }
    if (this.props.viewedUser.avatarURL === undefined){
      avatar = window.defaultavURL;
    }else{
      avatar = this.props.viewedUser.avatarURL
      console.log("made it here ok")
    }
    return(
      <div className="user-profile-full hidden">
        <div className="user-profile-header">
          <h1> Profile</h1>
          <button onClick = {this.closeProfile}><img src={window.xURL} width="13"/></button>
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