import React from 'react';
import { ProtectedRoute } from "../../../util/route_util";
import ChannelShowHeader from './ChannelShowHeader';
import MessageListContainer from '../../messages/MessageListContainer';
import MessageFormContainer from '../../messages/MessageFormContainer';
import MessageList from '../../messages/MessageListContainer';
import MessageForm from '../../messages/MessageFormContainer';

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