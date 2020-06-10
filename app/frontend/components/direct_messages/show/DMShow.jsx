import React from 'react';
import DMShowHeader from './DMShowHeader';
import DMMessageListContainer from '../../messages/DMMessageListContainer';
import DMMessageFormContainer from '../../messages/DMMessageFormContainer';
import ProfileFull from '../../user/ProfileFull';

class DMShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchDirectMessage(this.props.match.params.directMessageId)
  }

  componentDidUpdate(prevProps){
    if (prevProps.directMessage != this.props.directMessage){
      for(let i = 0; i < this.props.directMessage.subscribed_users.length; i++){
        if (this.props.directMessage.subscribed_users[i] !== this.props.currentUserId){ 
          this.props.fetchUser(this.props.directMessage.subscribed_users[i])
          .then(action => this.setState({partner: action.user}))
        }
      }
    }
  }

  render() {
    if (this.props.directMessage === undefined) {
      return null;
    } else {
      return (
        <div className="dm-show full">
          <ProfileFull viewedUser={this.state.partner} currentUserId={this.props.currentUserId} />
          <DMShowHeader directMessage={this.props.directMessage}/>
          <DMMessageListContainer />
          <DMMessageFormContainer />
        </div>
      )
    }
  }
}

export default DMShow;