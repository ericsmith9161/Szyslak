import React from 'react';

import Details from './header/HeaderDetails';
import Information from './header/HeaderInformation';

class ChannelShowHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className = "channel-show-header">
        <Information channel = {this.props.channel}/>
        <Details channel = {this.props.channel}/>
      </div>
    )
  }
}

export default ChannelShowHeader;