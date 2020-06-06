import React from 'react';

class MessageList extends React.Component{
  constructor(props){
    super(props);
    this.state = {messages: this.props.messages};
    this.bottom = React.createRef();

  }

  componentDidMount(){
    this.props.fetchChannelMessages(this.props.channelId);
    App.cable.subscriptions.create(
      {channel: "ChannelChatChannel", channelId: this.props.channelId},
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data.message)
          });
        },
        speak: function(data){
          return this.perform("speak", data);
        }
      }
    );

  }

  componentDidUpdate(){
    this.bottom.current.scrollIntoView();
  }

  render(){
    return (
      <ul className="message-list">
        {this.state.messages.map(message => (
          <li key = {message.id}>
            {message}
          </li>
        ))}
      </ul>
    )
  }
}

export default MessageList;
