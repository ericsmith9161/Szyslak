import React from 'react';
import ChannelShowHeader from './ChannelShowHeader';
import ChannelMessageListContainer from '../../messages/ChannelMessageListContainer';
import ChannelMessageFormContainer from '../../messages/ChannelMessageFormContainer';

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
            <ChannelShowHeader channel={this.props.channel} deleteChannel={this.props.deleteChannel} openChannelTopic={this.props.openChannelTopic} addPeople={this.props.addPeople} />
            <ChannelMessageListContainer />
            <ChannelMessageFormContainer />
          </div>

      )
    }
  }
}

export default ChannelShow;