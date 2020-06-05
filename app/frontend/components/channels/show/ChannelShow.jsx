import React from 'react';

import ChannelShowHeader from './ChannelShowHeader';
import ChannelForm from '../form/ChannelForm';
import MessageList from '../../messages/MessageList'
import MessageForm from '../../messages/MessageForm'

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
            <ChannelShowHeader channel={this.props.channel} />
            <MessageList />
            <MessageForm />
          </div>
      )
    }
  }
}

export default ChannelShow;