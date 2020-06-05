import React from 'react';

import {Link} from 'react-router-dom';

class UserInfoDropdown extends React.Component{
  constructor(props){
    super(props);
    this.state =  
      {user: this.props.user};
    this.changeStatus = this.changeStatus.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
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

  handleSignout(e){
    e.preventDefault
    this.props.logout()
  }

  render(){
    return(
        <div id="user-info-dropdown" className="user-info-dropdown">
          <div className="user-info-dropdown-head">
            {/* avatar here */}
            <div>
              <h3><b>{this.state.user.username}</b></h3>
              <p>You're set to <b>{this.state.user.status}. </b>
                <button className="change-status-button" onClick={this.changeStatus}> Change</button></p>
            </div>
          </div>
          <button className="status-update-btn"> <span className="stat-but-emote">☺&nbsp;</span> <span className="stat-but-text">Update your status</span> </button>
          <ul id="user-info-popout" className="user-info-popout">
            <li id="pause-notifications-hover" className="ui-dropdown-hover"><span>Pause notifications</span><span>></span></li>
            <li><Link to={`/users/${this.state.user.id}`}>View profile</Link></li>
            <li><span>Preferences</span><span>?</span></li>
            <li id="tools-hover" className="ui-dropdown-hover"><span>Tools</span><span>></span></li>
            <li id="help-hover" className="ui-dropdown-hover"><span>Help</span><span>></span></li>
            <li onClick={this.handleSignout}><Link to="/greeting">Sign out of Szyslak</Link></li>
            {/* weird workspace and total messages stuff? */}
            <li id="add-workspaces-hover" className="ui-dropdown-hover"><span>Add Workspaces</span><span>></span></li>

          </ul>
        </div>
    )
  }
}

export default UserInfoDropdown;

// workspace and total message stuff?
// set status modal?


//finish this trash later it stoinks