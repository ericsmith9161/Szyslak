import React from 'react';
class DMShowHeaderInformation extends React.Component{
  render(){
    return(
      <div className="dm-show-header-information">
        <h1>{this.props.directMessage.other_user_usernames[0]}</h1>
      </div>
    )
  }

}

export default DMShowHeaderInformation;