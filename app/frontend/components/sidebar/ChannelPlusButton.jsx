import React from 'react';
import { Link } from 'react-router-dom';

//needs to take in channels from props

class ChannelPlusButton extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannels();
    this.props.fetchUser(this.props.sessionid)
  }

  //this.setstate
  //is this . state hidden or not
  //render null or render lis

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