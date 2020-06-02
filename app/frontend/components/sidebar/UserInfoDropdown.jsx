import React from 'react';

import {Link} from 'react-router-dom';

class UserInfoDropdown extends React.Component{
  constructor(props){
    super(props);
    this.state =  
      {user: this.props.user,
       displayed: false};
    this.changeStatus = this.changeStatus.bind(this);
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

  render(){
    return(
      <div id="user-info-dropdown" className = "user-info-dropdown">
        <div className = "user-info-dropdown-head">
          {/* avatar here */}
          <div>
            <h3>{this.state.name}</h3>
            <p>You're set to <b>{this.state.user.status}.</b>
            <button className="change-status-button" onClick={this.changeStatus}> Change</button></p>
          </div>
            {/* set status modal? */}

        </div>
        <ul>
          <li id = "pause-notifications-hover" className = "ui-dropdown-hover">Pause notifications</li>
          <li><Link to={`/users/${this.state.user.id}`}>View profile</Link></li>
          <li>Preferences</li>
          {/* weird workspace and total messages stuff? */}
          <li id = "tools-hover" className = "ui-dropdown-hover">Tools</li>
          <li id= "help-hover" className = "ui-dropdown-hover">Help</li>
          <li>Sign out of Szyslak</li>
          <li id= "add-workspaces-hover" className = "ui-dropdown-hover">Add Workspaces</li>
        </ul>
      </div>
    )
  }
}

export default UserInfoDropdown;

// workspace and total message stuff?
// set status modal?


