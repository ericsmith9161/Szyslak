import React from 'react';
import {withRouter} from 'react-router-dom';

class ChannelMessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {body: this.props.message.body};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchChannel(this.props.match.params.channelId);
    this.props.fetchChannelUsers(this.props.match.params.channelId);

  }

  update(field){
    return e => {
      this.setState({ [field]: e.currentTarget.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.body !== ""){
      let theRightChannel = App.cable.subscriptions.subscriptions[0];
      // let theRightChannel = App.cable.subscriptions.subscriptions.filter((subscription) => subscription.identifier.channel_id === this.props.channelId)[0]
      theRightChannel.speak({body: this.state.body, user_id: this.props.message.user_id, messageable_type: 'Channel', messageable_id: this.props.message.messageable_id, username: this.props.currentUser.username});
      this.setState({ body: "" });
    }
  }

  render() {
    if (this.props.channel === undefined){
      return null;
    }else{
      return (
        <div className="message-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder={`Message #${this.props.channel.name}`}
            />
          </form>
          <button onClick={this.handleSubmit}>➲</button>
        </div>
      )
    }
  }
}

export default ChannelMessageForm;