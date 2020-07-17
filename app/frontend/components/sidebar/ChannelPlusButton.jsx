import React from 'react';
import { Link } from 'react-router-dom';

class ChannelPlusButton extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannels();
    this.props.fetchUser(this.props.sessionid)
  }

  render() {
    return (
      <div className="channel-plus-button">
        <Link to='/channels'>Browse Channels</Link>
        {this.props.createChannel}
      </div>
    )
  }

}

export default ChannelPlusButton;