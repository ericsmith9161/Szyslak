import React from 'react';

import {Link} from 'react-router-dom';
import ProfileFullContainer from '../user/ProfileFullContainer';

class UserInfoDropdown extends React.Component{
  constructor(props){
    super(props);
    this.state =  
      {user: this.props.user};
    this.changeStatus = this.changeStatus.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  changeStatus(e){
    e.preventDefault();
    if (this.state.user.status === "active"){
      this.setState({status: "away"})
    }else{
      this.setState({status: "active"})
    }
    this.props.editUser(this.state.user)
  }

  handleShow(e){
    e.preventDefault();
    const profile = document.querySelector(".user-profile-full");
    const channelShow = document.querySelector(".channel-show");
    const channelIdx = document.querySelector(".channel-index")
    profile.classList.toggle("hidden");
    if (channelIdx !== null){
      channelIdx.classList.toggle("full");
      channelIdx.classList.toggle("part");
    }
    if (channelShow !== null){
      channelShow.classList.toggle("full");
      channelShow.classList.toggle("part");
    }
    this.props.closeModal()
  }

  handleSignout(e){
    e.preventDefault
    this.props.logout()
    e.stopPropagation();
    this.props.closeModal();
  }

  render(){
    let avatar;
    if (this.props.user.avatarURL === undefined){
      avatar = window.defaultavURL;
    }else{
      avatar = this.props.user.avatarURL;
    }
    return(
        <div id="user-info-dropdown" className="user-info-dropdown">
          <div className="user-info-dropdown-head">
            <img src={avatar} width="30"/>
            <div>
              <h3><b>{this.state.user.username}</b></h3>
              <p>You're set to active</p>
            </div>
          </div>
          <ul id="user-info-popout" className="user-info-popout">
            <li className="u-i-d-v-p"><button onClick={this.handleShow}>View profile</button></li>
            <li onClick={this.handleSignout}><Link to="/greeting">Sign out of Szyslak</Link></li>
          </ul>
        </div>
    )
  }
}

export default UserInfoDropdown;

// workspace and total message stuff?
// set status modal?


//finish this trash later it stoinks