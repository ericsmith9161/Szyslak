import React from 'react';

import Details from './header/HeaderDetails';
import Information from './header/HeaderInformation';

class ChannelShowHeader extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <Information channel = {this.props.channel}/>
        <Details channel = {this.props.channel}/>
      </div>
    )
  }
}

export default ChannelShowHeader;