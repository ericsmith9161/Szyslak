import React from 'react';

import ChannelShowHeader from './ChannelShowHeader';
import ChannelForm from '../form/ChannelForm';
import MessageList from '../../messages/MessageList'
import MessageForm from '../../messages/MessageForm'

class ChannelShow extends React.Component {

  render() {
    return (
      <div>
        <ChannelShowHeader/>
        <ChannelForm />
        <MessageList />
        <MessageForm />
      </div>
    )
  }
}

export default ChannelShow;