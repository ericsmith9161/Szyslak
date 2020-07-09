import React from 'react';

import MessageShowContainer from './MessageShowContainer';

class ChannelMessageList extends React.Component{
  constructor(props){
    super(props);
    this.bottom = React.createRef();
  }

  componentDidMount(){
    this.props.fetchChannelMessages(this.props.channelId);
    App.cable.subscriptions.create(
      { channel: "ChannelChatChannel", channel_id: this.props.channelId },
      {
        received: data => {
          this.props.receiveMessage(data.message);
        },
        speak: function (data) {
          return this.perform("speak", data);
        },
      }
    )
    if (App.cable.subscriptions.subscriptions.length > 1) {
      App.cable.subscriptions.subscriptions = App.cable.subscriptions.subscriptions.slice(1)
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.channelId !== prevProps.channelId){
      this.props.fetchChannelMessages(this.props.channelId)
      App.cable.subscriptions.create(
        { channel: "ChannelChatChannel", channel_id: this.props.channelId },
        {
          received: data => {
            this.props.receiveMessage(data.message);
          },
          speak: function (data) {
            return this.perform("speak", data);
          },
        }
      )
      App.cable.subscriptions.subscriptions = App.cable.subscriptions.subscriptions.slice(1)
    }

    if(this.props.messages.length !== 0){
      if(this.bottom.current !== null){
        this.bottom.current.scrollIntoView();
      }
    }
  }

  render(){

    if(this.props.messages.length === 0){
      return <div className="message-list">
      </div>
    }
    else{
      let lastMessageUserIds = [];
      return (
        <div className="message-list">
          <ul className="message-list-list">
            {this.props.messages.map(message => {
              lastMessageUserIds.unshift(message.user_id);
              return(<li key={message.id}>
                <MessageShowContainer message={message} fetchUser={this.props.fetchUser} lastMessageUser={lastMessageUserIds[1]} />
                <div ref={this.bottom} />
              </li>)
            }
            )}
          </ul>
        </div>
      )
    }
  }
}

export default ChannelMessageList;
