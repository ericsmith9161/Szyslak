import React from 'react';

import {Link} from 'react-router-dom';

class UserInfoDropdown extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.user;
  }

  changeStatus(e){
    e.preventDefault();
    if (this.state.status === "active"){
      this.setState({status: "away"})
    }else{
      this.setState({status: "active"})
    }
    this.props.updateUser(this.state)
  }

  render(){
    return(
      <div className = "user-info-dropdown">
        <div className = "user-info-dropdown-head">
          {/* avatar here */}
          <div>
            <h3>{this.state.name}</h3>
            <p>You're set to <b>{this.state.status}.</b>
            <button className="change-status-button" onClick={changeStatus}> Change</button></p>
          </div>
            {/* set status modal? */}

        </div>
        <ul>
          <li id = "pause-notifications-hover" className = "ui-dropdown-hover">Pause notifications</li>
          <li><Link to={`/users/${this.state.id}`}>View profile</Link></li>
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


