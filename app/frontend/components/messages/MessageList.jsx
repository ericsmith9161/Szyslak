import React from 'react';

class MessageList extends React.Component{
  constructor(props){
    super(props);
    this.bottom = React.createRef();
  }

  componentDidMount(){
    this.props.fetchChannelMessages(this.props.channelId)
    App.currentSubscription = App.cable.subscriptions.create(
      { channel: "ChannelChatChannel" },
      {
        received: data => {
          this.props.receiveMessage(data.message);
        },
        speak: function (data) {
          return this.perform("speak", data);
        },
      }
    )
  }

  componentDidUpdate(prevProps){
    if (this.props.channelId !== prevProps.channelId){
      this.props.fetchChannelMessages(this.props.channelId)
    }

    if(this.props.messages.length !== 0){
      this.bottom.current.scrollIntoView();
    }
  }

  render(){

    if(this.props.messages.length === 0){
      return <div className="message-list">
      </div>
    }
    else{
      return (
        <div className="message-list">
          <ul className="message-list-list">
            {this.props.messages.map(message => (
              <li key = {message.id}>
                {message.body}
                <div ref={this.bottom} />
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default MessageList;
