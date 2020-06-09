import React from 'react';
import ChannelShowHeader from './ChannelShowHeader';
import MessageListContainer from '../../messages/MessageListContainer';
import MessageFormContainer from '../../messages/MessageFormContainer';

class ChannelShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchChannel(this.props.match.params.channelId)
  }

  render() {
    if (this.props.channel === undefined){
      return null;
    }else{
      return (
        <div className="channel-show full">
          <ChannelShowHeader channel={this.props.channel} deleteChannel={this.props.deleteChannel} openChannelTopic={this.props.openChannelTopic}/>
          <MessageListContainer />
          <MessageFormContainer />
        </div>
      )
    }
  }
}

export default ChannelShow;