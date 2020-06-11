import React from 'react';

import ProfileFull from './ProfileFull';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.openProfile = this.openProfile.bind(this);
    this.state = {clickedUser: this.props.currentUser}
  }

  componentDidMount() {
    this.props.fetchUsers()


  }

  openProfile(user) {
    this.setState({clickedUser: user})
    const profile = document.querySelector(".user-profile-full");
    const channelShow = document.querySelector(".channel-show");
    const channelIdx = document.querySelector(".channel-index");
    const userIdx = document.querySelector(".user-index")

    profile.classList.remove("hidden");
    if (channelShow !== null) {
      channelShow.classList.toggle("full");
      channelShow.classList.toggle("part");
    }
    if (channelIdx !== null) {
      channelIdx.classList.toggle("full");
      channelIdx.classList.toggle("part");
    }

    if (userIdx.classList.contains("full")) {
      userIdx.classList.toggle("full");
      userIdx.classList.toggle("part");
    }
  }

  render(){
    const userProfilePieces = this.props.users.map(user => {
      let avatar;
      if (user.avatarURL === undefined) {
        avatar = window.defaultavURL;
      } else {
        avatar = user.avatarURL
      }
      return (
        <li key={user.id}>
          <button className="user-profile-btn" onClick={(e) => this.openProfile(user)}>
            <img className = "u-i-av" src = {avatar} />
            <div>
              <span>{user.username}&nbsp;</span>
              {/* <img className = "u-i-stat-circ" src={window.emptycircleURL} /> */}
            </div>
          </button>
        </li>
      )
      
    })
    if (this.props.users.length === 0) {
      return <div className="user-index full">
      </div>
    }
    else {
      return (
          <div className="user-index full">
            <div className="user-index-header">
              <span>People</span>
              <button>Invite People</button>
            </div>
            < ProfileFull viewedUser={this.state.clickedUser} currentUserId = {this.props.currentUserId} />
            <div className="user-index-below-searchbar">
              <span>{this.props.users.length} members</span>
              <span>
                <span>Sort: A to Z</span> <span>filter</span>
              </span>
            </div>
            <div className="user-index-body">
              <ul className="user-index-list">
                {userProfilePieces}
              </ul>
            </div>

          </div>
      )
    }
  }
}

export default UserIndex;