import React from 'react';
import {withRouter} from 'react-router-dom';

class MessageForm extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props)
    this.state = {body: this.props.message.body};
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.props)
  }

  componentDidMount(){
    this.props.fetchChannel(this.props.match.params.channelId);
  }

  update(field){
    return e => {
      this.setState({ [field]: e.currentTarget.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({body: this.state.body, user_id: this.props.message.user_id, messageable_type: 'Channel', messageable_id: this.props.message.messageable_id});
    this.setState({ body: "" });
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
              placeholder={`Message ${this.props.channel.name}`}
            />
            <button>➲</button>
          </form>
        </div>
      )
    }
  }
}

export default MessageForm;